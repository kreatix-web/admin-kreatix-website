import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Mail,
  User,
  Calendar,
  Trash2,
  RefreshCw,
  LogOut,
  Search,
} from "lucide-react";
import { sql } from "../lib/neon";
import { ensureSchema } from "../lib/migrate";

type Contact = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  converted: boolean;
  no_prospect: boolean;
};

export default function ContactCRM() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check access token
  useEffect(() => {
    const token = searchParams.get("access");
    const validToken = import.meta.env.VITE_CRM_ACCESS_TOKEN;

    if (token === validToken) {
      setIsAuthenticated(true);
      loadContacts();
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, [searchParams]);

  const loadContacts = async () => {
    setLoading(true);
    try {
      // Ensure schema exists before querying (idempotent)
      await ensureSchema();
      const result = await sql(
        "SELECT id, name, email, message, created_at, converted, no_prospect FROM contact_submissions ORDER BY created_at DESC",
      );
      setContacts(result as Contact[]);
    } catch (error) {
      console.error("Error loading contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id: number) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      await sql("DELETE FROM contact_submissions WHERE id = $1", [id]);
      setContacts(contacts.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact");
    }
  };

  const toggleConverted = async (id: number, currentValue: boolean) => {
    try {
      await sql("UPDATE contact_submissions SET converted = $1 WHERE id = $2", [
        !currentValue,
        id,
      ]);
      setContacts(
        contacts.map((c) =>
          c.id === id ? { ...c, converted: !currentValue } : c,
        ),
      );
    } catch (error) {
      console.error("Error updating converted status:", error);
      alert("Failed to update converted status");
    }
  };

  const toggleNoProspect = async (id: number, currentValue: boolean) => {
    try {
      await sql(
        "UPDATE contact_submissions SET no_prospect = $1 WHERE id = $2",
        [!currentValue, id],
      );
      setContacts(
        contacts.map((c) =>
          c.id === id ? { ...c, no_prospect: !currentValue } : c,
        ),
      );
    } catch (error) {
      console.error("Error updating no prospect status:", error);
      alert("Failed to update no prospect status");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
            <LogOut size={40} className="text-red-400" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-4 text-[#FFFFFF]">
            Access Denied
          </h1>
          <p className="text-muted mb-8">
            You need a valid access token to view this page.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-accent text-dark font-display font-bold text-sm tracking-wide px-6 py-3 rounded-full hover:bg-[#d8f06e] transition-all duration-300"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <RefreshCw
            size={48}
            className="text-accent animate-spin mx-auto mb-4"
          />
          <p className="text-muted font-mono text-sm tracking-wide">
            Loading contacts...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-[#FFFFFF] font-body">
      {/* Header */}
      <header className="bg-dark/90 backdrop-blur-xl border-b border-dark-border sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-[#FFFFFF]">
              Kreatix <span className="text-accent">CRM</span>
            </h1>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-1">
              Contact Management Console
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadContacts}
              className="p-2.5 hover:bg-dark-card rounded-lg transition-colors duration-300 text-muted hover:text-[#FFFFFF]"
              title="Refresh"
            >
              <RefreshCw size={18} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2.5 bg-dark-card border border-dark-border hover:border-accent/30 rounded-lg transition-all duration-300 text-muted hover:text-[#FFFFFF]"
            >
              <LogOut size={16} />
              <span className="font-mono text-xs tracking-wide">Exit</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-16 py-10">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent/20 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                  Total Contacts
                </p>
                <p className="font-display text-3xl font-bold text-[#FFFFFF]">
                  {contacts.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <User size={22} className="text-accent" />
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent/20 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                  This Week
                </p>
                <p className="font-display text-3xl font-bold text-[#FFFFFF]">
                  {
                    contacts.filter((c) => {
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return new Date(c.created_at) > weekAgo;
                    }).length
                  }
                </p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Calendar size={22} className="text-accent" />
              </div>
            </div>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent/20 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                  Filtered
                </p>
                <p className="font-display text-3xl font-bold text-[#FFFFFF]">
                  {filteredContacts.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Search size={22} className="text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative group">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors duration-300"
            />
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-card border border-dark-border rounded-lg pl-12 pr-4 py-4 text-[#FFFFFF] placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 font-body"
            />
          </div>
        </div>

        {/* Contacts Table */}
        <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden">
          {filteredContacts.length === 0 ? (
            <div className="text-center py-16">
              <Mail size={48} className="mx-auto mb-4 text-muted/40" />
              <p className="text-muted font-body">
                {searchTerm
                  ? "No contacts match your search"
                  : "No contacts yet"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark-surface border-b border-dark-border">
                    <th className="px-6 py-4 text-left font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                      Message
                    </th>
                    <th className="px-6 py-4 text-left font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                      Date
                    </th>
                    <th className="px-6 py-4 text-center font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                      Converted
                    </th>
                    <th className="px-6 py-4 text-center font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                      No Prospect
                    </th>
                    <th className="px-6 py-4 text-center font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContacts.map((contact, index) => (
                    <tr
                      key={contact.id}
                      className={`border-b border-dark-border/50 hover:bg-dark-surface/50 transition-colors duration-200 ${
                        index % 2 === 0
                          ? "bg-transparent"
                          : "bg-dark-surface/20"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-muted font-mono">
                        #{contact.id}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-[#FFFFFF]">
                        {contact.name}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-accent hover:text-[#d8f06e] transition-colors duration-300"
                        >
                          {contact.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted max-w-xs">
                        <div className="line-clamp-2" title={contact.message}>
                          {contact.message}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted whitespace-nowrap font-mono">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() =>
                            toggleConverted(contact.id, contact.converted)
                          }
                          className={`w-5 h-5 rounded border-2 inline-flex items-center justify-center transition-all duration-300 cursor-pointer ${
                            contact.converted
                              ? "bg-accent border-accent text-dark"
                              : "border-dark-border hover:border-muted bg-transparent"
                          }`}
                          aria-label={`Mark ${contact.name} as converted`}
                          title={`Mark ${contact.name} as converted`}
                        >
                          {contact.converted && (
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() =>
                            toggleNoProspect(contact.id, contact.no_prospect)
                          }
                          className={`w-5 h-5 rounded border-2 inline-flex items-center justify-center transition-all duration-300 cursor-pointer ${
                            contact.no_prospect
                              ? "bg-red-500 border-red-500 text-white"
                              : "border-dark-border hover:border-muted bg-transparent"
                          }`}
                          aria-label={`Mark ${contact.name} as no prospect`}
                          title={`Mark ${contact.name} as no prospect`}
                        >
                          {contact.no_prospect && (
                            <svg
                              className="w-3 h-3"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => deleteContact(contact.id)}
                          className="p-2 hover:bg-red-500/10 text-muted hover:text-red-400 rounded-lg transition-all duration-300 inline-flex"
                          title="Delete contact"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
