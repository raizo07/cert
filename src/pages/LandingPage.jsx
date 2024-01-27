import Navbar from "../ui/Navbar";

function LandingPage() {
  return (
    <div className="bg-heroBg bg-no-repeat bg-cover bg-center min-h-screen">
      <Navbar />
      <main className="text-white text-center pt-[132px]">
        <h1 className="text-[40px] font-semibold mb-3 font-OverpassMono">
          Your Digital Certificate Management
          <br /> Platform.
        </h1>
        <p className="text-[24px] font-bold">
          Securely manage and showcase your achievements with CertifyHub.
        </p>
      </main>
    </div>
  );
}

export default LandingPage;
