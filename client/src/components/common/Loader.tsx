import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed bg-white w-full h-[100vh] top-0 left-0 z-20 flex items-center justify-center">
      <Loader2 className="animate-spin w-10 h-10" />
    </div>
  );
};

export default Loader;
