import HomeLayout from "../Layouts/HomeLayout"

function AboutUs(){
  return(
    <HomeLayout>
        <div className="pl-20 pt-20 flex flex-col text-white">
           <div className="flex items-center gap-5 mx-10">
              <section className="w-/2 space-y-10">
               <h1>
                Affordable and quality education
               </h1>
               <p>
                Our goal is to provide the affordable and quality education to the world.
                We are providing the platform for the aspiring teachers and students to share 
                their skills,creativity and knowledge to each other to empower and contribute
                in the growth and wellness of mankind.
               </p>
              </section>
           </div>
        </div>
    </HomeLayout>
  )
} 

export default AboutUs