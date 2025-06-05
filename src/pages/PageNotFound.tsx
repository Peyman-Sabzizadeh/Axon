import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <motion.div
      className="bg-background flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Ghost className="text-muted-foreground mb-6 h-20 w-20" />
      </motion.div>
      <h1 className="mb-2 text-4xl font-bold tracking-tight">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild>
        <Link to="/">Go back home</Link>
      </Button>
    </motion.div>
  );
}

export default PageNotFound;
