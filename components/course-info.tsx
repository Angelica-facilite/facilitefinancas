export default function CourseInfo() {
  const courseTopics = [
    {
      id: 1,
      icon: "?",
      title: "Como criar um produto digital",
      align: "right",
    },
    {
      id: 2,
      icon: "?",
      title: "Como vender mesmo sem ter audiência",
      align: "right",
    },
    {
      id: 3,
      icon: "!",
      title: "Planilha de projeção de ganhos",
      align: "right",
    },
    {
      id: 4,
      icon: "?",
      title: "Quais são os formatos de produtos digitais",
      align: "right",
    },
    {
      id: 5,
      icon: "!",
      title: "Plano para fazer a primeira venda",
      align: "right",
    },
  ]

  return (
    <div className="absolute top-0 right-0 h-full flex flex-col justify-center space-y-4 pr-4">
      {courseTopics.map((topic) => (
        <div key={topic.id} className="flex items-center gap-2">
          <div className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm">
            {topic.icon}
          </div>
          <p className="text-sm md:text-base">{topic.title}</p>
        </div>
      ))}
    </div>
  )
}

