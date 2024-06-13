import Image from 'next/image'
import Link from 'next/link'
import '@/style/global.css';
export default function About() {
    return(
        <div className="main-content">
            <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>



                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-4xl md:text-5xl'>Family Planning</p>
                    <p className="absolute bottom-10 text-white px-8 py-2 text-sm md:text-base">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Family Planning</Link>
                    </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-8 md:mt-14 mb-14'>
            <p className='md:text-base text-base md:pl-0  pl-6 md:pr-0 pr-6 text-justify text-[#5C5C5C]'>
                Take control of your reproductive health and make informed decisions with the comprehensive Family Planning services offered at 
                Spandan Maternity Home. We understand the importance of planning for the future, whether you are considering expanding your family 
                or seeking contraceptive options. Our experienced healthcare professionals provide personalized guidance and support, offering a 
                range of contraceptive methods tailored to your lifestyle and preferences. Additionally, we offer counseling on fertility awareness and 
                preconception care to help you achieve your family planning goals. With our compassionate approach and commitment to 
                confidentiality, trust Spandan to empower you on your journey towards reproductive well-being.
                </p>
                <div className='flex flex-col flex-row-reverse md:flex-row'>
                <div className='md:w-1/2 w-full mt-12'>
                    <div className='container bg-black md:hidden'> 
                        <Image
                        src="/Images/treat12.png"
                        width={640}
                        height={348}
                        alt="Picture of the author"
                      
                        />
                    </div>
                    <h1 className='text-base mb-3 font-bold md:pl-0 pl-4 md:mt-0 mt-8'>Services under Family Planning</h1>
                    <ul className="list-disc text-base md:pl-6 pl-12 text-[#5C5C5C]">
                        <li>Contraceptive counseling</li>
                        <li>Birth control options education</li>
                        <li>Prescription and provision of contraceptives</li>
                        <li>Long-acting reversible contraception (LARC) insertion (such as IUDs or implants)</li>
                        <li>Barrier methods distribution (condoms, diaphragms)</li>
                        <li>Natural family planning education</li>
                        <li>Preconception counseling</li>
                        <li>Fertility awareness methods training</li>
                        <li>Counseling on emergency contraception</li>
                        <li>Sterilization counseling and procedures (if desired)</li>
                    </ul>
                    </div>
                    <div className='md:w-1/2 w-full mt-12'>
                        <div className='container bg-black hidden md:block'> 
                        <Image
                        src="/Images/treat12.png"
                        width={640}
                        height={348}
                        alt="Picture of the author"
                      
                        />
                    </div>
                    </div>
                </div>

                 {/* footer-section */}
                 <div className="flex flex-col md:flex-row gap-10 mt-0 md:mt-24 text-center md:p-0 p-8">
                 <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                    <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/IVF-Speciality">
                            <Image
                                 src="/Images/Rectangle9.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-lg mt-4 text-purple-900  font-bold">IVF Speciality</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Menstrual-Issues">
                            <Image
                                 src="/Images/Rectangle10.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-lg mt-4 text-purple-900 font-bold">Menstrual Issues</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Infertility-Work-up">
                            <Image
                               src="/Images/Rectangle11.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-lg mt-4 text-purple-900  font-bold">Infertility Work-up</p></a>
                            </div>
                        </div>
                    </div>
                    <div>
                    <a href="/Treatments" className="block md:mt-12 mt-0 md:mb-24  text-center w-[200px] h-[50px] rounded-3xl text-white bg-pink-500 flex items-center justify-center mx-auto">
                        View All Treatments
                    </a>
                </div>
            </div>
        </div>
    )}