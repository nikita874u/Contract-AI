import { motion } from "framer-motion";
import { FileText } from "lucide-react";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-700 font-bold text-lg">
          <FileText size={24} />
          <span>AI Contract Reviewer</span>
        </div>

        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg shadow-md transition">
          Dashboard
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
