'use client'
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { useSidebar } from "./ui/sidebar"
import Image from "next/image"

export default function SupportSection() {

  return (
    <section className="py-16  text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-orange-500 font-bold uppercase tracking-wider mb-2">SUPORTE</h3>
              <h2 className="text-3xl md:text-4xl font-bold ">
                Aqui você <span className="text-orange-500">não estará sozinho.</span>
              </h2>
            </div>

            <p className="">
              A gente sabe que mudar hábitos e lidar com dinheiro pode gerar dúvidas e inseguranças {" "}
              <span className="text-orange-500 font-medium">
                por isso, no Jornada da Liberdade Financeira,
              </span>{" "}
              o suporte é parte fundamental da sua evolução:
            </p>

            <div className="space-y-4 text-black">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-md">
                <h4 className="font-medium ">
                  <span className="text-orange-500 font-bold">
                    Na plataforma</span> – Deixe suas perguntas direto nas aulas e receba respostas objetivas e aplicáveis para seguir com confiança.
                </h4>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-md">
                <h4 className="font-medium ">
                  <span className="text-orange-500 font-bold">No WhatsApp</span> – Uma vez por semana, você poderá tirar dúvidas diretamente comigo e com outros participantes. É o seu espaço para trocar experiências, ajustar seu sistema e garantir que está no caminho certo.
                </h4>
              </div>
            </div>

            <p className="">
              Isso significa que,{" "}
              <span className="text-orange-500 font-medium">
                Sempre que surgir uma dúvida, você vai ter com quem contar.
              </span>{" "}
              Nada de travar por não saber o que fazer — aqui, você segue com clareza, apoio e direção.
            </p>
          </div>

          <div className=" w-full  flex  overflow-hidden rounded-md shadow-lg">
            <Image
              src={cn("/pc-phone.png")}
              alt="Incorporar"
              width={420}
              height={420}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

