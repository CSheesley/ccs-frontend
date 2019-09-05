// const link = (url, linkText) => `
//   <a href=${url} className='faq-link'>
//     ${linkText}
//   </a>
//   `;

const faqs = [
  {
    question: 'What is Colorado Crisis Services?',
    category: ['general'],
    answer:
      'We are Colorado’s first statewide resource for mental health, substance use or emotional crisis help, information and referrals. We formed as a part of the initiative set forth by Gov. John Hickenlooper, in partnership with the Colorado Department of Human Services, to strengthen Colorado’s mental health system. Our purpose is to provide greater access to mental health services, ensuring Coloradans get the right services in the right locations at the right time.',
    id: 1
  },
  {
    question: 'How can Colorado Crisis Services help?',
    category: ['general'],
    answer:
      'If you don’t know where to begin getting mental health, substance use or emotional help for yourself or someone you know, start here. Colorado Crisis Services provides confidential and immediate support, 24/7/365 on the phone, text, chat, or in person at our walk-in centers.',
    id: 2
  },
  {
    question: 'Can Crisis Services help with concerns I have after watching 13 Reasons Why?',
    category: ['specific concern'],
    answer:
      'If you have questions or concerns about the Netflix show 13 Reasons Why, we can help. We’re ready to help youth navigate what’s happening at school or at home, and we can help parents and educators talk with youth in your lives about the show’s storyline and subject matter. Call us at 1-844-493-8255, text “TALK” to 38255, or just click the “Chat Now” button at the top of this page.',
    id: 3
  },
  {
    question: 'What can I expect when I call?',
    category: ['call', 'general'],
    answer:
      'When you call Colorado Crisis Services, you will be connected to a crisis counselor (a trained professional with a minimum of a master’s degree in the behavioral health field), or you can elect to speak to a trained peer specialist who has gone through similar experiences. We offer translation services for non-English speakers, we engage in immediate problem solving, and we make follow-up calls to ensure you receive continued care.',
    id: 4
  },
  {
    question: 'What kinds of people are answering the phones? What are their backgrounds?',
    category: ['general', 'call'],
    answer:
      'Depending on the reason, you will either be connected to a crisis counselor or elect to speak to a trained peer specialist. Crisis counselors are trained mental health professionals with a minimum of a master’s degree in the behavioral health field. Peer specialists are individuals who have gone through similar mental health experiences and are now providing insight and guidance to others. They are trained to offer support on a variety of topics.',
    id: 5
  },
  {
    question: 'What kinds of things can I call about?',
    category: ['general'],
    answer:
      'Crisis is in the eye of the beholder—so if you aren’t sure how to handle a crisis, or a situation that may lead to a crisis, our services are open to you. You can call about anything in your life that you feel you need help with or want to talk about. \n \n Common call topics include: depression, substance use, grief & loss, self injury, suicidal thoughts, bullying, stress, parenting concerns, trauma, drugs & alcohol, relationship problems, family crisis, anxiety, domestic violence, homelessness, disability, concerns for a friend or family member, recovery support, and resource questions. Reaching those who otherwise would not get care',
    // Prevent crisis for those already in treatment
    // Help people to navigate the system for access to care
    // Support sober living
    // Develop a coordination of care loop with providers and first responders to crises
    // Psychoeducation and counseling for prevention of future crises
    // ED Diversion
    // Public Health & Safety
    // Suicide Prevention
    // Remove 911/Law Enforcement usage burden
    // Free Help for Families
    // Resource for other community entities',
    id: 6
  },
  {
    question: 'Can crisis services help youth?',
    category: ['specific concern'],
    answer:
      'Colorado Crisis Services is open to all Coloradans, regardless of age. If you or a youth in your life are in need of crisis services, you can start here.',
    id: 7
  },
  {
    question:
      'Is Colorado Crisis Services able to help with questions specific to my sexual or gender identity?',
    category: ['specific concern'],
    answer:
      'Yes. Colorado Crisis Services is an open and affirming environment for anyone in need of behavioral health help or resources. The staff is trained in a wide range of issues, including struggles specific to the LGBTQIA+ community. In fact, several of our staff members identify with this community.',
    id: 8
  },
  {
    question:
      'What is the difference between the Colorado Crisis Services Line and the Suicide Hotline?',
    category: ['suicide', 'specific concern'],
    answer:
      'The National Suicide Prevention Lifeline is 1-800-273-8255 (TALK) is based in New York and is routed by area code to regional providers. The area codes for Colorado are routed to two organizations locally, including Colorado Crisis Services, which is a certified Lifeline provider. Most calls are related to suicide prevention or rescue.  The Colorado Crisis Services line is dedicated to Colorado and provides access to the statewide crisis system. There is no wrong door for any behavioral health crisis or resource need, and anyone can call either number and get access to the same professional and expert response.',
    id: 9
  },
  {
    question: 'What is the difference between the Colorado Crisis Services hotline and warm line?',
    category: ['general'],
    answer:
      'The same number, 1-844-493-TALK (8255), will reach both the hotline and warm line. The hotline is staffed by professional crisis counselors who are equipped to handle a wide range of crisis scenarios. The warm line is staffed by peer support specialists, individuals who have gone through crisis personally and are now available to help others. Upon calling, the counselor or specialist will determine which line will best serve your needs.',
    id: 10
  },
  {
    question: 'Do I have to give my name when I contact Crisis Services?',
    category: ['confidentiality'],
    answer:
      'The counselor will ask for at least a first name and call back number in case the call gets dropped or disconnected. However, it is not required to give your name.',
    id: 11
  },
  {
    question: 'Are my text messages confidential?',
    category: ['confidentiality', 'text'],
    answer:
      'The confidentiality and security of texts and chats is ensured through the software provider, which uses the same encryption and data protection standards required by major financial institutions to transact business with each other. When using our text service, keep in mind, your information is being sent through your cell phone and involves technology outside of our platform. Contact your cell service providers for more information about security on their end. Please see the Terms and Conditions at https://rmcrisispartners.org/home/services/chattext/textterms/ for further information regarding confidentiality.',
    id: 12
  },
  {
    question: 'Where can I get help in person?',
    category: ['walk-in'],
    answer:
      'Our walk-in centers are open 24/7 and offer confidential, in-person crisis support, information and referrals to anyone in need. If you need in-person assistance or are helping someone with a crisis you can always go to a walk-in center near you. Walk-in centers are located statewide, including the Denver Metro region, Northeast region, Western Slope region and Southeast region.',
    id: 13
  },
  {
    question: 'What happens when I go to a Walk-In Crisis Center?',
    category: ['walk-in'],
    answer:
      'The appropriate intervention will be determined and if needed, you will receive a clinical evaluation. This may include a brief physical evaluation by a medical professional. If admitted to a Crisis Bed, you will meet with a Psychiatrist within 24 hours, as well as participate in developing a treatment plan that will allow you to transition home safely, with additional supports if needed.',
    id: 14
  },
  {
    question: 'How often can I call or walk-in?',
    category: ['general'],
    answer:
      'You can use our services whenever you need additional support or feel that you are in “crisis.” You may also just show up at any of the walk-in crisis centers if you are experiencing some sort of mental health, substance use or emotional issue.',
    id: 15
  },
  {
    question: 'What can I expect when I text?',
    category: ['text'],
    answer:
      'In order to begin talking with a crisis text counselor, text TALK to 38255. Please read the terms and conditions that are sent to you in the initial response text, viewable at https://rmcrisispartners.org/home/services/chattext/textterms/. \n You will be asked to share your date of birth and your zip code. A crisis \n After you have ended your text, you will get one additional question in a few hours asking you to rate the “helpfulness” of your text conversation. If you would like to stop receiving texts from us at any time, simply text STOP and you will be removed from our list. If you would like to begin talking to a crisis text counselor again later, just text TALK to 38255 any time.',
    id: 16
  },
  {
    question: 'Who can access crisis services?',
    category: ['general'],
    answer:
      "Nearly 20% of individuals using RMCP services are calling about someone else; family members, teacher, police officer, physicians or friends, people who are more likely to notice indicators or influence obtaining care.\nA significant amount of of individuals are already in treatment and needing supplemental support, additional resources and follow-up.\n 65% of all interactions receive no referral for urgent or non-urgent resources, indicating the individual's needs were fully addressed through RMCP's staff intervention.\n Approximately 35% of individuals do receive a referral to local resources, urgent and non-urgent\n 1/3 of all calls have a safety component to self or another.\n The top 3 barriers to treatment are no insurance, caller decision to not seek treatment, or provider dissatisfaction. ",
    id: 17
  },
  {
    question: 'Do your counselors speak languages besides English?',
    category: ['specific concern'],
    answer:
      'The hotline counselors, as well as the staff at the walk-in centers, have access to over two hundred languages via telephonic translation services. There may also be bilingual staff at some of the locations. Translation is not currently available for our text and chat services.',
    id: 18
  },
  {
    question: 'Can you come to me?',
    category: ['general'],
    answer:
      'If it is determined to be the best intervention, a Mobile Crisis Clinician may be dispatched by calling the hotline (1-844-493-TALK (8255)). A mobile clinician may go to a variety of locations in the community (schools, homes, churches, etc.)',
    id: 19
  },
  {
    question: 'Are the services free?',
    category: ['general'],
    answer:
      'Crisis services are available regardless of one’s ability to pay. If an individual has private insurance, a co-payment may be required depending on the plan coverage. No one will be turned away for crisis services. A co-payment is not required at the time of service. However, for texts, standard text message rates from your cell phone provider will apply (consult your cell provider for clarification)',
    id: 21
  },
  {
    question: 'Can I request help for a loved one?',
    category: ['specific concern'],
    answer:
      'A family member or friend of an individual in crisis may certainly call the hotline and discuss the situation with the clinician to determine the best plan.',
    id: 22
  },
  {
    question: 'Who uses text services?',
    category: ['text'],
    answer:
      'Text services are perfect for those individuals that would prefer different ways to communicate with others, or for those who find direct verbal communication challenging. \n It could be the best choice of reaching out for anyone who may be depressed, going through a hard time, or just needs to talk, including people who are thinking about suicide. Any life issues may be discussed electronically with Crisis Counselors who are here to listen and support you through whatever difficult times you may be facing. \n The text line is there to serve individuals who might not otherwise reach out when in crisis such as...\n Teenagers who are in crisis and need to connect with someone in their most challenging moments.\n Rural communities with low connectivity or reliable phone service.\n Populations that prefer non-direct verbal communication. \n Crisis Services are there when people need it no matter how they prefer to communicate.',
    id: 23
  },
  {
    question: 'How can I help share Colorado Crisis Services with others?',
    category: ['general'],
    answer:
      "By visiting our press page, you can gain access to our digital files such as logos, social posts, talking points, messaging options and more. If you need additional content, please reach our to Mary Hoefler at mary.hoefler@state.co.us. Thank you for your interest in sharing our information. Every time you share, you're creating the opportunity to help connect someone in crisis to the support they need.",
    id: 24
  }
];

export default faqs;
