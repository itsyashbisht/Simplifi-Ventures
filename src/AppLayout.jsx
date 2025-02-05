import { Outlet, useLocation } from "react-router-dom";
import MobileNavigation from "./Layouts/MobileNavigation";
import MobileFooter from "./Layouts/MobileFooter";
import { AnimatePresence, motion } from "framer-motion";

function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <MobileNavigation />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          <Outlet />
        </motion.div>
        <motion.div
          className="hidden md:block lg:block fixed top-0 left-0 w-full h-full bg-[#122649]"
          initial={{ y: "-100% ", opacity: 1 }}
          animate={{ y: "100% ", opacity: 0.95 }}
          transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }}
        />
        <motion.div
          className="block fixed sm:block md:hidden lg:hidden top-0 left-0 w-full h-full bg-[#122649]"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: "100%", opacity: 0.95 }}
          transition={{ duration: 1.5, ease: [0.2, 1, 0.2, 1] }}
        />
      </AnimatePresence>
      <MobileFooter />
    </div>
  );
}

export default AppLayout;
