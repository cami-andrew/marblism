'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  HeartOutlined,
  BulbOutlined,
  ToolOutlined,
  SmileOutlined,
  SafetyOutlined,
  TeamOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Expert-Designed Assessments`,
      description: `Gain deep insights into your pet's psyche with our professionally crafted psychological tests.`,
      icon: <BulbOutlined />,
    },
    {
      heading: `Personalized Training Plans`,
      description: `Receive tailored strategies to address your pet's unique behavioral challenges and needs.`,
      icon: <ToolOutlined />,
    },
    {
      heading: `Veterinary Expertise`,
      description: `Access guidance from experienced veterinarians specializing in animal behavior.`,
      icon: <SafetyOutlined />,
    },
    {
      heading: `Positive Reinforcement Techniques`,
      description: `Learn effective, humane methods to encourage good behavior and strengthen your bond.`,
      icon: <SmileOutlined />,
    },
    {
      heading: `Ongoing Support`,
      description: `Enjoy continuous assistance as you implement your pet's personalized training plan.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Improved Pet-Owner Relationship`,
      description: `Foster a deeper, more harmonious connection with your furry companion.`,
      icon: <HeartOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Thompson`,
      designation: `Dog Owner`,
      content: `Cami transformed my relationship with Max. The personalized training plan helped us overcome his anxiety issues, and now our walks are a joy!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Rodriguez`,
      designation: `Cat Owner`,
      content: `I was skeptical at first, but Cami's expert advice helped me understand my cat's behavior. Luna is much happier now, and so am I!`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Chen`,
      designation: `Multi-Pet Household`,
      content: `Managing multiple pets was overwhelming until I found Cami. Their tailored approach has brought peace to our home. It's been life-changing!`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Patel`,
      designation: `First-Time Pet Owner`,
      content: `As a new pet parent, I was lost. Cami's step-by-step guidance gave me the confidence to raise a well-behaved, happy puppy. Invaluable service!`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Nguyen`,
      designation: `Rescue Pet Adopter`,
      content: `Cami helped me understand and work through my rescue dog's trauma. Their compassionate approach made all the difference in our journey together.`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `Robert Johnson`,
      designation: `Senior Pet Owner`,
      content: `I thought you couldn't teach an old dog new tricks, but Cami proved me wrong. Their age-appropriate strategies have given my senior pet a new lease on life!`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `How It Works`,
      link: `#how-it-works`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
  ]

  const packages = [
    {
      title: `Basic Paw`,
      description: `Essential support for understanding your pet`,
      monthly: 29,
      yearly: 299,
      features: [
        `1 Psychological Assessment`,
        `Basic Training Plan`,
        `Email Support`,
      ],
    },
    {
      title: `Happy Tail`,
      description: `Comprehensive care for a thriving pet-owner relationship`,
      monthly: 59,
      yearly: 599,
      features: [
        `3 Psychological Assessments`,
        `Advanced Training Plan`,
        `Video Consultations`,
        `24/7 Chat Support`,
      ],
      highlight: true,
    },
    {
      title: `Ultimate Companion`,
      description: `Premium package for the devoted pet parent`,
      monthly: 99,
      yearly: 999,
      features: [
        `Unlimited Assessments`,
        `Personalized Training Program`,
        `Priority Video Consultations`,
        `Home Visit (where available)`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does Cami's pet psychological testing work?`,
      answer: `Our expert-designed assessments evaluate your pet's behavior, cognitive abilities, and emotional responses through a series of questions and observations you provide. We then analyze this data to create a comprehensive psychological profile of your pet.`,
    },
    {
      question: `Can Cami help with severe behavioral issues?`,
      answer: `While Cami can provide valuable insights and strategies for many behavioral issues, we always recommend consulting with a veterinarian for severe cases. Our service can complement professional in-person care but is not a substitute for medical treatment.`,
    },
    {
      question: `How long does it take to see results with Cami's training plans?`,
      answer: `Results can vary depending on the pet, the issue, and consistency in applying the training. Many pet owners report seeing improvements within 2-4 weeks of following our personalized plans. Remember, lasting change often requires patience and persistence.`,
    },
    {
      question: `Is Cami suitable for all types of pets?`,
      answer: `While our primary focus is on dogs and cats, our experts can provide guidance for a wide range of pets including small mammals, birds, and reptiles. The depth of our services may vary depending on the species, but we strive to help all pet owners better understand and care for their animal companions.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Take the Assessment`,
      description: `Complete our comprehensive pet psychological evaluation, providing detailed insights into your pet's behavior and needs.`,
    },
    {
      heading: `Receive Your Pet Profile`,
      description: `Our experts analyze the results and create a detailed psychological profile of your pet, highlighting strengths and areas for improvement.`,
    },
    {
      heading: `Get Your Personalized Plan`,
      description: `Based on the profile, we develop a tailored training and care plan designed to address your pet's specific needs and enhance their well-being.`,
    },
    {
      heading: `Implement and Improve`,
      description: `Put the plan into action with ongoing support from our team. Track progress and adjust as needed to ensure the best outcomes for you and your pet.`,
    },
  ]

  const painPoints = [
    {
      emoji: `😟`,
      title: `Feeling frustrated and helpless with your pet's behavioral issues`,
    },
    {
      emoji: `😔`,
      title: `Struggling to understand why your pet acts the way they do`,
    },
    {
      emoji: `😞`,
      title: `Worrying about the impact of your pet's behavior on your family and home`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Unlock the Secret to a Happier, Healthier Pet`}
        subtitle={`Discover your pet's unique psychology and transform your relationship with expert-guided training and support.`}
        buttonText={`Start Your Pet's Journey`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/uABDtt-cami-lo7c`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy pet owners`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Pet Care Experts`}
      />
      <LandingPainPoints
        title={`40% of Dogs and 50% of Cats Face Behavioral Challenges - You're Not Alone`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        id="how-it-works"
        title={`Your Path to Pet Harmony in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Pet Parenting with Cami's Innovative Tools`}
        subtitle={`Discover how our comprehensive approach can transform your pet's behavior and strengthen your bond.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real Stories of Transformed Pet Relationships`}
        subtitle={`See how Cami has helped pet owners just like you achieve harmony and happiness with their furry friends.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Pet's Happiness and Your Peace of Mind`}
        subtitle={`Choose the perfect plan to start your journey towards a more fulfilling relationship with your pet.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Pet Psychology Questions Answered`}
        subtitle={`Find answers to common questions about our innovative approach to pet behavior and training.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Understand Your Pet Like Never Before?`}
        subtitle={`Take the first step towards a happier, healthier relationship with your furry friend.`}
        buttonText={`Start Your Pet's Assessment Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
