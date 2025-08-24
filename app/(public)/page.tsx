import ClassDetails from "@/components/class-details"
import InstructorSection from "@/components/instructor-section"
import BonusSection from "@/components/bonus-section"
import FinalCTA from "@/components/final-cta"
import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/video-player"
import MethodologySection from "@/components/methodology-section"
import FooterSection from "@/components/footer-section"
import SupportSection from "@/components/support-section"
import Image from "next/image"

export const metadata = {
  title: "Hyund.AI",
  description: "Seu consultor",
  icons: {
    icon: '/tree.png',           // seu SVG
    apple: '/tree.png', // opcional: ícone para iOS
    // opcional: .ico de fallback
  },
}


export default function Home() {
  return (
    <main className="bg-[#0a0e23] text-white  flex min-h-screen flex-col">
      {/* Header */}
      {/* 
      <div className="bg-oratext-orange-500 py-3 text-center font-bold text-black">
        <p className="text-sm md:text-base">VAGAS LIMITADAS - INSCREVA-SE AGORA</p>
      </div> 
      */}

      {/* Hero Section */}
      <section className=" py-8 md:py-8">
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row w-full items-center gap-8">

            {/* Texto – 40% */}
            <div className="w-full md:w-2/5 space-y-6">
              <div className="space-y-8 ">
                <Image
                  src="/logo-jlf.png"
                  alt="Semana do Fabricante de Milhas"
                  width={400}
                  height={200}
                  className=""
                />

                {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  Jornada da <span className="text-orange-500 font-bold"><br />Liberdade Financeira</span>
                </h2> */}
                <div className="w-full md:w-3/5  md:hidden aspect-video">
                  <VideoPlayer />
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                  Você ganha bem, mas no fim do mês sente que <span className="text-orange-500 font-bold">o dinheiro simplesmente sumiu?</span>
                </h1>
              </div>

              <div className="space-y-2">
                <p className="md:text-lg">
                  Nesse vídeo, você vai aprender o método que já ajudou várias pessoas a conquistarem segurança financeira <span className="text-orange-500 font-bold">mesmo achando que nunca sobra dinheiro no fim do mês.</span>
                  <br /><br />
                  <span className="text-orange-500 font-bold">Assista agora e veja como montar um sistema financeiro simples, prático e adaptado à sua vida.</span>
                  Você vai perceber a diferença entre apenas anotar gastos e realmente assumir o controle do seu dinheiro.
                  <br />
                  <br />
                  Afinal, saber o que entra e sai é diferente de ter clareza para tomar decisões e construir sua liberdade financeira.
                </p>
              </div>

              <Button className="w-full h-16 bg-orange-500 hover:bg-orange-500 text-lg text-white font-bold">
                QUERO TER LIBERDADE FINANCEIRA
              </Button>
            </div>

            {/* Vídeo – 60% */}
            <div className="w-full md:w-3/5 hidden md:flex aspect-video">
              <VideoPlayer />
            </div>
          </div>
        </div>
      </section>



      {/* Methodology Section */}
      <MethodologySection />

      <SupportSection />

      {/* Instructor Section */}
      <InstructorSection />
      <FooterSection />
    </main>
  )
}

