import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";
import Image from "next/image";

const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="relative h-full overflow-auto bg-[#090521] ">
        <Image
        src="/twist_line_edit.png"
        alt="landing"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />
        {/* <LandingNavbar/> */}
        <div className="relative z-20 h-full w-full ">
          {children}
        </div>
        {/* <LandingFooter/> */}
      </main>
     );
  }
   
  export default LandingLayout;