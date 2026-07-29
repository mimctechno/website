import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const allServices = [
  {
    id: "whatsapp-api",
    title: "WhatsApp Business API",
    path: "/services/whatsapp-api",
    color: "#25D366",
  },
  {
    id: "tally-integration",
    title: "Tally WhatsApp Integration",
    path: "/services/tally-whatsapp-integration",
    color: "var(--color-cyber-accent)",
  },
  {
    id: "erp-crm",
    title: "Enterprise ERP & CRM",
    path: "/services/erp-crm",
    color: "var(--color-cyber-accent3)",
  },
  {
    id: "web-development",
    title: "Web Architecture",
    path: "/services/web-development",
    color: "var(--color-cyber-accent2)",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    path: "/services/digital-marketing",
    color: "#ff3366",
  },
  {
    id: "enterprise-consulting",
    title: "IT Consulting",
    path: "/services/enterprise-consulting",
    color: "#a020f0",
  },
];

export default function RelatedServices({ currentId }: { currentId: string }) {
  // Filter out the current service and pick the first 3
  const related = allServices.filter((s) => s.id !== currentId).slice(0, 3);

  return (
    <section className="mt-32 mb-16 border-t border-[var(--color-cyber-border)] pt-16">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-[var(--color-cyber-accent)] font-[var(--font-cyber-accent)] text-sm uppercase tracking-widest">
          &gt;&gt; RELATED_MODULES
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((service) => (
          <Link
            key={service.id}
            to={service.path}
            className="group p-[2px] cyber-chamfer bg-[var(--color-cyber-border)] hover:bg-[var(--color-cyber-accent)] transition-colors duration-300 block"
            style={{ "--hover-color": service.color } as React.CSSProperties}
          >
            <div className="bg-[var(--color-cyber-card)] cyber-chamfer p-6 h-full relative overflow-hidden group-hover:bg-[#0a0a0f] transition-colors flex flex-col justify-between">
              <h3
                className="font-[var(--font-cyber-head)] text-lg font-bold uppercase tracking-widest text-white mb-6 transition-colors"
                style={{ color: "white" }}
              >
                {service.title}
              </h3>
              <div className="flex items-center gap-2 font-[var(--font-cyber-accent)] text-xs uppercase tracking-widest text-[var(--color-cyber-muted-fg)] group-hover:text-white transition-colors">
                EXPLORE{" "}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
