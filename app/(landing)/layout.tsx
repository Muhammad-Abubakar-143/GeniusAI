import LandingFooter from "@/components/LandingFooter";
import LandingNavbar from "@/components/LandingNavbar";

const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="h-full bg-[#111827] overflow-auto relative z-0">
        <LandingNavbar/>
        <div>
          {children}
        </div>
        <LandingFooter/>
      </main>
     );
  }
   
  export default LandingLayout;