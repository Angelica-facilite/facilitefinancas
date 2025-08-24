export default function ClassDetails() {
  const details = [
    {
      id: 1,
      icon: "✅",
      text: "Como criar um sistema financeiro que funciona para você",
    },
    {
      id: 2,
      icon: "✅",
      text: "A estratégia para sair das dívidas sem sofrimento",
    },
    {
      id: 3,
      icon: "✅",
      text: "Como construir um futuro financeiro estável sem precisar ganhar mais dinheiro",
    },
    {
      id: 4,
      icon: "✅",
      text: "O erro que impede a maioria das pessoas de conquistar a liberdade financeira",
    },
    {
      id: 5,
      icon: "💡",
      text: "E no final da aula, uma oportunidade única para você ir ainda mais longe!",
    },
  ]

  return (
    <section className="bg-[#111535] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Você já tentou economizar dinheiro, mas nunca consegue manter um planejamento?
          </h2>

          <div className="bg-[#0a0e23] p-8 rounded-lg">
            <h3 className="font-bold text-xl mb-6 text-white">Nesta aula única e exclusiva, você vai aprender:</h3>
            <div className="space-y-4">
              {details.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className="text-lg shrink-0">{item.icon}</div>
                  <p className="text-sm md:text-base text-white">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

