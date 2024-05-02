'use client';
import Image from 'next/image';
import Link from 'next/link';
import ModalImage from "react-modal-image";

export default function About() {
    return (
     
        <div className="main-content" >
         <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>
                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Our Doctor</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/About">Our Doctor</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-24'>
                <div className="box-border h-auto w-full p-4 flex">
                    <div>
                        <Image
                        src="/Images/surbhi-vegad-1.jpg"
                        width={500}
                        height={600}
                        alt="Dr. Surabhi Vegad" />
                    </div>
                    <div className="ml-24 mt-4">
                        <h1 className="text-4xl text-left ml-4 font-bold " style={{ color: 'rgb(1, 146, 144)'}} >Dr. Surabhi Vegad</h1>
                            <div className="box-border h-auto p-4">
                                <div className="flex items-start  leading-loose font-medium ">
                                    <p className="box-border w-20 font-bold  mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Speciality</p>
                                    <ul className="flex-grow  ml-3" style={{color:'gray'}}>
                                        <li>High Risk Pregnancy Care</li>
                                        <li>Advanced Gynological Laparoscopy</li>
                                        <li>Hysteroscopy Procedures</li>
                                        <li>In-vitro fertilization(IVF)</li>
                                        <li>Intrauterine Insemination(IUI)</li>
                                        <li>Comprehensive Infertility Solutions</li>
                                    </ul>
                                </div>
                                <div className="flex items-start mt-2 leading-loose font-medium ">
                                    <p className=" box-border w-20 font-bold mr-4 " style={{ color: 'rgb(1, 146, 144)'}}>Education</p>
                                    <ul className="flex-grow  ml-3" style={{color:'gray'}}>
                                        <li>M.B.B.S (U-Gujarat) 2002</li>
                                        <li>Bechelor of medicine (U-Gujarat) 2004</li>
                                        <li>Bechelor of Surgery (U-Gujarat) 2004</li>
                                        <li>M.D (Obstrectrics & Gynecology) U-Gujarat-2005</li>
                                       
                                  
                                    </ul>
                                </div>
                                <div className="flex items-start mt-2 leading-loose font-medium ">
                                    <p className=" box-border w-20 font-bold mr-4" style={{ color: 'rgb(1, 146, 144)'}}>Experience</p>
                                    <p className="w-20flex-grow  ml-3" style={{color:'gray'}}>20 years</p>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
                <div className="font-medium text-center mt-20 pb-20 pt-20 bg-slate-100 text-slate-500">
                    <div className='container max-w-[1280px] mx-auto  pb-14 '>
                        <p className='text-4xl text-center' style={{ color: 'rgb(1, 146, 144)'}}> Dr. Surabhi Vegad : Empowering Womens Health</p>
                   
                        <div className='mt-10'>
                            <p>
                                Dr. Surabhi Vegad stands as a premier Obstetrician and Leading Gynecologist in Bhuj, Kutch, specializing
                                in state-of-the-art treatments/for a ray-200 wide range of gynaecological issues. With extensive experience spanning
                                over 20 years,
                                    Dr. Vegad is a trailblazer in womens healthcare, consistently advancing research and patient care.
                            </p>
                            <br></br>
                            <p >
                                As a distinguished
                                gynaecologist, IVF expert, and laparoscopic surgeon, Dr. Vegad offers unparalleled services at Spandan Maternity Home,
                                a renowned fertility hospital in Bhuj, Kutch. Committed to international standards, she ensures top-tier infertility
                                treatments combined with compassionate patient care. Beyond her core expertise in Obstetrics and Gynecology,
                            </p>
                            <br></br>
                            <p>
                                Dr. Vegad has honed her skills in specialized areas, including high-risk pregnancy management, laparoscopic procedures,
                                colposcopy, and menopausal care. With a track record of successful IUI and laparoscopic surgeries over 20 years,
                                Dr. Vegad has transformed countless lives, delivering optimal outcomes for her patients. She is also a proactive
                                educator, regularly hosting IVF awareness seminars, adolescent health seminars and fitness seminars.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

    );
}