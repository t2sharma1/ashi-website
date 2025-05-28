import React from "react";
import Navbar from "./Navbar";


export default function About() {
  return (
      <div className="bg-[lavender] min-h-screen pt-0 py-10 px-6 font-sans">
       <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center pt-10 gap-6 mb-10">
          <img
            src="/Aboutpage.jpg"
            alt="Ashi Sharma"
            className="w-48 h-48 rounded-xl shadow-md"
          />
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-2">Ashi's Story.. so far :)</h1>
            <p className="text-gray-700 text-lg">
              Ashi Sharma is a joyful and talented 12-year-old who's already captivating audiences as an actor, dancer, and digital creator. Her passion shines both on stage and on screen!
            </p>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Early Life</h2>
          <p className="text-gray-800 text-base">
From the moment she could walk, Ashi had a rhythm in her step and a song in her heart. Even as a toddler, she gravitated toward music and movement—dancing around the house to any tune she heard. Recognizing her natural love for expression, her mom enrolled her in ballet classes at age 4. That first dance class lit a spark, and Ashi has been dancing ever since. Though naturally shy, something magical happens when she steps into a dance studio or in front of a camera—she lights up, transforms, and fully expresses herself without hesitation. That contrast has become one of her most endearing qualities and strongest artistic strengths.          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Hobbies</h2>
          <p className="text-gray-800 text-base">
            When she’s not acting or dancing, Ashi loves exploring new music, creating short performance videos, and experimenting with choreography. She enjoys reading imaginative stories, painting, roller skating, and spending time with her friends. Whether she’s rehearsing lines or mastering a new tumbling move, Ashi brings the same excitement and curiosity to everything she does. She also loves animals, outdoor adventures, and watching her favorite dance competition shows for inspiration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Goals</h2>
          <p className="text-gray-800 text-base">
            Ashi dreams of becoming a versatile performer—someone who can tell powerful stories through acting, dance, and voice. She hopes to work in film, television, and live theater, taking on roles that challenge her and allow her to connect with audiences in meaningful ways. She also wants to use her platform to inspire other young artists to follow their passions with confidence and joy. With her strong work ethic, bright spirit, and dedication to her craft, Ashi is well on her way.

          </p>
        </section>
      </div>
    </div>
  );
}

