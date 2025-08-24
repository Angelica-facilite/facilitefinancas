import RegistrationForm from "@/components/registration-form"

export default function FinalCTA() {
  return (
    <section className="bg-[#0a0e23] text-white py-12 md:py-16 border-t border-[#111535]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl">
        <div className="text-center space-y-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">⏳ Vagas limitadas! Não fique de fora!</h2>
          <p className="text-lg">Inscreva-se agora e comece sua transformação financeira!</p>
        </div>

        <div className="bg-[#111535] p-8 rounded-lg">
          <RegistrationForm buttonText="QUERO PARTICIPAR" />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-300">
            Dúvidas? Entre em contato pelo e-mail: contato@jornadaliberdadefinanceira.com.br
          </p>
        </div>
      </div>
    </section>
  )
}

