import Image from "next/image"

export default function BonusSection() {
  return (
    <section className="bg-[#0a0e23] py-12 md:py-16 border-t border-[#111535]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Bônus Especial Para Quem Se Inscrever Agora</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Bônus Especial"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-[#111535] p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl text-yellow-400">🔹</div>
              <div>
                <h3 className="font-bold text-xl text-white">Planner Financeiro Digital</h3>
                <p className="text-gray-300">Para começar a organizar suas finanças imediatamente</p>
              </div>
            </div>

            <div className="bg-[#111535] p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl text-yellow-400">🔹</div>
              <div>
                <h3 className="font-bold text-xl text-white">Acesso ao Grupo VIP no WhatsApp</h3>
                <p className="text-gray-300">
                  Com dicas e insights exclusivos para acelerar sua organização financeira
                </p>
              </div>
            </div>

            <p className="text-yellow-400 font-medium">
              Estes bônus exclusivos estarão disponíveis apenas para quem se inscrever antes do evento!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

