import Image from "next/image"
import { Star } from "lucide-react"

export default function InstructorSection() {
  return (
    <section className="bg-[#101535] py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 ">

          <div className=" w-full h-full   overflow-hidden rounded-md shadow-lg">
            <Image
              src="/angelica-2.png?height=320&width=320"
              alt="Incorporar"
              width={1080}
              height={1080}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Texto */}
          <div className="space-y-6 h-full">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold  ">
                Quem é
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold">
                Angelica Oliveira
              </h2>

              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white shadow-sm">
                <Star className="w-4 h-4  text-black mr-2" />
                <span className=" text-sm text-black ">Criadora do Método JLF</span>
              </div>
            </div>

            <div className="space-y-4 md:text-xl ">
              <p>
                Eu acredito que segurança financeira vai muito além dos números.
                Ela tem a ver com tranquilidade, liberdade e com a forma como nos relacionamos com o dinheiro — sem culpa, sem medo, sem pressão.
              </p>

              <p>
                Meu nome é Angelica Oliveira, e nos últimos anos, tenho me dedicado a ajudar pessoas que ganham bem, mas ainda vivem com a sensação de que o dinheiro simplesmente escapa pelas mãos.
                Pessoas inteligentes, capazes, mas que se sentem frustradas por não conseguirem transformar sua renda em uma vida mais leve, planejada e segura.
              </p>

              <p>Foi por isso que criei o método Jornada da Liberdade Financeira — uma abordagem prática, humanizada e acessível para você criar um sistema financeiro que funcione de verdade para sua vida, respeitando sua realidade e seus valores.</p>
              <p>Minha missão é mostrar que é possível, sim, ter controle sem sofrimento, economizar sem viver no aperto e construir uma nova relação com o dinheiro com leveza e clareza.</p>
              <p>Se você está pronto(a) para virar essa chave, eu estou aqui pra te guiar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
