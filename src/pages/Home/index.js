

export default function Home() {
  return (
    <main>
      <Hero />
      <Specials />
    </main>
  )
}

function Hero() {
  return (
    <section className="bg-[#4d5d57] h-[300px]">
      <article className="lg:mx-[20%] py-8 flex justify-between h-full mx-8">
        <div className="h-full flex flex-col w-[40%]">
          <h1 className="font-serif text-4xl text-[#e9c10c]"
          >Little Lemon</h1>
          <h2 className="font-serif text-3xl text-white mb-3"
          >Chicago</h2>
          <p className="font-sans text-sm text-white flex-1">
            We are a family owned
            Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button className="rounded-xl bg-[#ffd000] py-3 px-4 w-fit font-sans"
          >Reserve a table</button>

        </div>

        <img className="w-[40%] rounded-xl h-[300px] object-cover"
          src="/img/restaurant food B.jpg" />
      </article>

    </section>
  )
}

function Specials() {
  return (
    <section className="my-20  lg:mx-[20%] mx-8">
      <div className="justify-between flex my-10">
        <h2 className="font-serif text-4xl"
        >This weeks specials!</h2>
        <button className="rounded-xl bg-[#ffd000] py-3 px-4 w-fit font-sans"
        >Online Menu</button>
      </div>
      <article className="flex gap-4 flex-col lg:flex-row">
        <MenuItem
          title="Greek Salad"
          price="12.99"
          description='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
          imgSrc='/img/menu_items/Greek salad.jpg'
        />
        <MenuItem
          title="Bruschetta"
          price="5.99"
          description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
          imgSrc='/img/menu_items/Bruschetta.jpg'
        />
        <MenuItem
          title="Lemon Dessert"
          price="5.00"
          description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          imgSrc='/img/menu_items/Lemon dessert.jpg'
        />

      </article>

    </section>

  )

}

function MenuItem({ title, price, description, imgSrc }) {
  return (
    <div className=" flex w-full flex-row lg:flex-col rounded-lg overflow-hidden">
      <img src={imgSrc} className="h-40 object-fit" />
      <div className=" bg-[#edefee] flex-1 flex flex-col p-4">
        <div className=" flex my-6">
          <p className=" flex-1">{title}</p>
          <p className=" text-[#e19b76]">{`$ ${price}`}</p>
        </div>
        <div className="flex-1 mb-10">
          <p>{description}</p>
        </div>
        <div className="">
          <p>Order a delivery</p>
        </div>
      </div>
    </div>
  )
}