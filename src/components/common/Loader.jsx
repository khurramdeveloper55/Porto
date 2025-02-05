import { ImSpinner8 } from "react-icons/im";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[999999999999999999999999]">
      <ImSpinner8 className="animate-spin text-blue-500 text-4xl" />
    </div>
  );
}
