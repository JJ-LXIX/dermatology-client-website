import Image from "next/image";
import Female1 from "@/public/images/testimonial people/female2.jpg";
import Female2 from "@/public/images/testimonial people/female6.jpg";
import Male1 from "@/public/images/testimonial people/male3.jpg";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alice Johnson",
    review: `"I had a wonderful experience at Washington Dental Clinic with Dr. Smith. Highly recommended for all your dental needs."`,
    image: Female1,
  },
  {
    name: "Bob Miller",
    review: `"Dr. Smith and the team at Washington Dental Clinic are friendly, professional, and provide top-notch care. Great experience!"`,
    image: Male1,
  },
  {
    name: "Caroline Davis",
    review: `"My family loves Washington Dental Clinic. Dr. Smith is fantastic, and the staff is always welcoming. A great dental practice!"`,
    image: Female2,
  },
];

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

type Props = {};

function SmallScreenTestimonial({}: Props) {
  return (
    <div className="min-h-screen w-full pb-10 md:min-h-[30vh] md:pb-20">
      <div className="flex min-h-screen w-full flex-col items-center space-y-10 md:min-h-[30vh] md:flex-row md:justify-around md:space-y-0  md:pb-20">
        {reviews.map((review) => {
          return (
            <motion.div
              variants={defaultAnimations}
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-100px", once: true }}
              key={review.name}
              className="w-3/4 overflow-hidden rounded-2xl bg-zinc-50 shadow-lg p-5 py-8 md:h-[25vh] md:w-[30%]"
            >
              <div className="flex h-full w-full flex-col space-y-5">
                {/* Review Text */}
                <div className="flex h-4/6 w-full items-center p-2 ">
                  {review.review}
                </div>
                {/* Image and Name */}
                <div className="flex h-2/6 w-full md:space-x-2 ">
                  <div className="flex h-full w-2/6 items-center justify-center">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={review.image}
                        alt="image of person smiling with nice teeth"
                        style={{ objectFit: "cover" }}
                        fill
                        sizes="20vw"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <div className="flex h-full w-4/6 items-center text-xl font-semibold self-center">
                    {review.name}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SmallScreenTestimonial;
