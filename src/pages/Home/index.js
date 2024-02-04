import { Link } from "react-router-dom"


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
        <div className="h-full flex flex-col md:w-[40%] w-full lg:w-[40%]">
          <h1 className="font-serif text-4xl text-[#e9c10c]"
          >Little Lemon</h1>
          <h2 className="font-serif text-3xl text-white mb-3"
          >Chicago</h2>
          <p className="font-sans text-sm text-white flex-1">
            We are a family owned
            Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          
            <Link 
            className="rounded-xl bg-[#ffd000] py-3 px-4 w-fit font-sans"
            to='/reservations'>Reserve a table</Link>
            


        </div>

        <img className="w-[40%] rounded-xl h-[300px] object-cover hidden md:block lg:block"
          src="/img/restaurant food B.jpg" />
      </article>

    </section>
  )
}

const sampleMenuItems = [
  {
    title: "Greek Salad",
    price: "12.99",
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/img/menu_items/Greek salad.jpg'
  },
  {
    title: "Bruschetta",
    price: "5.99",
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    image: '/img/menu_items/Bruschetta.jpg'
  },
  {
    title: "Lemon Dessert",
    price: "5.00",
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    image: '/img/menu_items/Lemon dessert.jpg'
  }
]

function Specials() {
  return (
    <section className="my-20  lg:mx-[20%] mx-8">
      <div className="justify-between flex my-10">
        <h2 className="font-serif text-4xl"
        >This weeks specials!</h2>
        <button className="rounded-xl bg-[#ffd000] py-3 px-4 w-[50%] md:w-fit lg:w-fit font-sans"
        >Online Menu</button>
      </div>
      <div className="flex gap-4 lg:gap-[5%] flex-col lg:flex-row">
        {sampleMenuItems.map(({ title, price, description, image }, i) => (
          <article className="w-full flex flex-row lg:flex-col lg:h-[500px] rounded-lg overflow-hidden" key={i}>
            <img className="object-cover lg:w-auto h-40 flex-none w-[20%]"
              src={image}
              alt={title}/>
            <div className="bg-[#edefee] w-full h-40 lg:h-full p-3 flex flex-col justify-between">
              <div className=" my-1 justify-between flex flex-none">
                <h2 className="font-serif font-medium text-md"
                >{title}</h2>
                <p className="font-serif text-md text-[#ff9b43]"
                >{`$${price}`}</p>
              </div>
              <p className="font-sans font-light text-sm flex-1"
              >
                {description}
              </p>
              <div className="flex justify-between"
              >
                <p className="font-medium"
                >Order a delivery</p>
                <img className="h-5"
                src='/img/bike-icon.svg'/>

              </div>

            </div>
          </article>
        ))}

      </div>

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