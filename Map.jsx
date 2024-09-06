import React, { useState } from 'react';
import { GiAustralia, GiLeafSkeleton } from "react-icons/gi";
import { MdGpsNotFixed } from "react-icons/md";
import { FaArrowLeft } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import './.css'






function Map() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showData, setShowData] = useState(false);
    const [contentVisible, setContentVisible] = useState(true);
    const [optionsVisible, setOptionsVisible] = useState(true);
    const [icon, setIcon] = useState(null);
    

    const fetchData = () => {
        setLoading(true);
        fetch('http://127.0.0.1:5001/cinemas')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setShowData(true);
                setLoading(false);
                setContentVisible(false); 
                setOptionsVisible(false); 
                setIcon(<GiAustralia />); 
                
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                setContentVisible(true); 
                setOptionsVisible(true); 
            });
    };

    const handleNewZealandClick = () => {
        setLoading(true);
        fetch('http://127.0.0.1:5000/cinemas_nz')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setShowData(true);
                setLoading(false);
                setContentVisible(false); 
                setOptionsVisible(false); 
                setIcon(<GiLeafSkeleton />); 
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                setContentVisible(true); 
                setOptionsVisible(true); 
            });
    };

    const hideData = () => {
        setShowData(false);
        setContentVisible(true); 
        setOptionsVisible(true); 
        setIcon(null);
    };
   





    return (
        <>
            {optionsVisible && (
                <div className='flex justify-end mr-64'>
                    <div className='absolute -top-1 mt-60'>
                        <div className='px-8 py-5 text-2xl text-zinc-500 flex'>
                            <p className=' text-lg pl-10 text-zinc-700 cursor-pointer' onClick={fetchData}>
                                Australia
                            </p>
                        </div>
                        <div className='px-8 py-2 text-2xl text-zinc-500 flex'>
                            <p className='text-lg pl-8 text-zinc-700 cursor-pointer' onClick={handleNewZealandClick}>
                                New Zealand
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className='bg-zinc-100'>
                {loading ? (
                    <div></div>
                ) : (
                    showData && (
                        <div className='w-min absolute -top-40 mt-60 pr-10 px-10 border-zinc-150 rounded-md pt-6 border-2 right-8 ' style={{ height: "124%", overflowY: 'auto' }}> <p className='absolute justify-center items-center left-40 pl-2 '> All Cinemas</p>
                            <div className='text-xl text-zinc-400 flex gap-32 '>
                                <div onClick={hideData} style={{ cursor: 'pointer' }}>
                                    <FaArrowLeft />
                                </div>
                                <div>
                                
                                </div>
                                
                                {icon && <p className='text-2xl pl-12'>{icon}</p>}
                            </div>
                            
                            <div className='border-t-[2px] border-zinc-150 mt-4 flex'></div>
                            <div className='pt-4 flex -right-36'>
                            <ul className='space-y-4'>
        {data.map((item, index) => (
            <li key={index} className='pb-2 '>
                <div className='flex justify-between items-center text-zinc-900 text-md'>
                    <span className=''>{item.name}</span>
                    <div className='flex items-center gap-6 text-zinc-600 text-lg'>
                  
                       <p className='gap-32'><FaPhoneAlt /></p>
                        <IoLocationOutline />
                    </div>
                </div>
            </li>
        ))}
    </ul>
                            </div>
                        </div>
                    )
                )}
            </div>



            {contentVisible && (
                <div className='w-screen h-full flex justify-end px-8'>
                    <div className='w-min border-2 border-zinc-150 bg-[#FFFFFF] rounded-md pr-4'>
                        <h1 className='text-2xl pt-1 pl-2 font-sans text-zinc-800'>Cinemas</h1>
                        <p className='pt-2 pl-4 text-base font-normal'>
                            Welcome to <strong>Cinema Finder</strong>, an application to allow you to<br />
                            browse for Cinemas throughout Australia and New Zealand.
                        </p>
                        <div className='border-t-[2px] border-[#F0F0F0] mt-6 flex justify-between items-center py-1 px-20'></div>
                        <h1 className='text-2xl pl-2 font-sans flex text-zinc-800' >Countries</h1>
                        {/* <div className=' px-8 py-5 text-2xl text-zinc-500 flex bg-[#FFFFFF]'>  */}
                     
                      
                        <div className=' container p-4 text-20 text-[#666666] flex items-center border-r-5 '>
                            <p className='text-2xl'><GiAustralia /></p>
                            
                            <button className='bg-[#EEEEEE] w-12 h-9 rounded-full text-xs   absolute right-7 top-61 text-zinc-900 '>481</button>

                            <p className='text-lg pl-8 text-zinc-700'></p>
                        </div>
                        <div className='container p-4 text-20 text-[#666666] flex items-center border-r-5'>
                        <p className='text-2xl'> <GiLeafSkeleton /></p><button className='bg-[#EEEEEE] w-10 h-7 rounded-full text-xs   absolute right-7 top-61 text-zinc-900 '>68</button>
                            
                            <p className='text-lg pl-8 text-zinc-700'></p>
                        </div>
                        <div className='border-t-[2px] border-[#F0F0F0] mt-2 flex justify-between items-center py-1 px-20'></div>
                        <h1 className='text-xl font-normal pl-2 text-zinc-800'>Franchises</h1>
                        <div className='text-2xl pr-2 font-sans pt-2 flex justify-items items-center'>
                            <div className='cardcontainer w-44 h-[18vh] flex justify-center items-center border-[1px] border-zinc-300 ml-6 mt-1 rounded-sm'>
                                <div className='pt-4 ml-1'>
                                    <img src="https://cinema-finder-poc.netlify.app/static/media/Hoyts.30b8c36189f987a92a4e07df667c06d6.svg" alt="Hoyts" />
                                    <div className='flex justify-start items-end'>
                                        <button className='bg-[#EEEEEE] w-16 h-8 rounded-full flex text-zinc-600 text-sm pt-1 gap-2  justify-center'><p className='top-2 text-lg pt-1'><GiAustralia /></p> 37</button>
                                        <button className='bg-[#EEEEEE] w-16 h-8 rounded-full flex items ml-2 text-sm pt-1 gap-2  justify-center text-zinc-600 '><p className='top-2 pt-1 text-zinc-600 text-lg'> <GiLeafSkeleton /></p> 10</button>
                                    </div>
                                </div>
                            </div>

                            <div className='card w-44 h-[18vh] flex justify-center items-center border-[1px] border-zinc-300 ml-14 mt-1 rounded-sm'>
                                <div className='pt-7 ml-1'>
                                    <img src="https://cinema-finder-poc.netlify.app/static/media/Event%20Cinemas.8d63e2105fb7b11558031e8f50fd9c9f.svg" alt="Event Cinemas" />
                                    <div className='flex justify-start items-end pt-4'>
                                    <button className='bg-[#EEEEEE] w-16 h-8 rounded-full flex text-zinc-600 text-sm pt-1 gap-2  justify-center cursor-pointer'><p className='top-2 text-lg pt-1'><GiAustralia /></p> 37</button>
                                    <button className='bg-[#EEEEEE] w-16 h-8 rounded-full flex items ml-2 text-sm pt-1 gap-2  justify-center text-zinc-600 cursor-pointer '><p className='top-2 pt-1 text-zinc-600 text-lg'> <GiLeafSkeleton /></p> 2</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='text-2xl pt-none font-sans flex justify-items items-center'>
                            <div className='cardcontainer w-44 h-[18vh] flex justify-center items-center border-[1px] border-zinc-300 ml-6 mt-4 mr-2 rounded-sm'>
                                <div className='pt-4 ml-1'>
                                    <img src="https://cinema-finder-poc.netlify.app/static/media/BCC.417e79d600cb1a46ac70.png" alt="BCC Cinemas" />
                                    <div className='flex justify-start items-end pl-14 pb-2 pt-1'>
                                    <button className='bg-[#EEEEEE] w-16 h-8 rounded-full cursor-pointer flex text-zinc-600 text-sm pt-1 gap-2  justify-center'><p className='top-2 text-lg pt-1'><GiAustralia /></p> 13</button>
                                    </div>
                                </div>
                            </div>

                            <div className='card w-44 h-[18vh] flex justify-center items-center border-[1px] border-zinc-300 ml-12 mt-4 rounded-sm'>
                                <div className='pt-7 ml-1'>
                                    <img src="https://cinema-finder-poc.netlify.app/static/media/Reading.da221967016ba5feb3e84dccbcf629ee.svg" alt="Reading Cinemas" />
                                    <div className='flex justify-start items-end pt-4'>
                                    <button className='bg-[#EEEEEE] w-16 h-8 rounded-full flex text-zinc-600 text-sm pt-1 gap-2 cursor-pointer justify-center'><p className='top-2 text-lg pt-1'><GiAustralia /></p> 23</button>
                                    <button className='bg-[#EEEEEE] w-16 h-8 rounded-full flex items ml-2 text-sm pt-1 gap-2  justify-center text-zinc-600 cursor-pointer '><p className='top-2 pt-1 text-zinc-600 text-lg cursor-pointer'> <GiLeafSkeleton /></p> 9</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='border-t-[1px] border-zinc-300 mt-4 py-6 px-4'>
                            <div className='text-2xl text-zinc-600 flex'>
                                <MdGpsNotFixed />
                                <h1 className='text-base text-zinc-900 pl-9 font-sans'>Nearby Cinemas</h1>
                            </div>
                            <div className='border-t-[1px] border-zinc-300 mt-4 py-6 px-4 pl-0 pt-2'>
                                <h1 className='text-2xl text-zinc-800'>Help</h1>
                                <h1 className='text-base flex pt-2 pl-2 text-zinc-800 font-medium'>
                                    Use the menu in the top navigation bar to switch between mapping libraries.
                                </h1>
                                <h1 className='text-base pt-4 pl-2 text-zinc-800 font-medium'>
                                    When viewing a list of cinemas, you can click to fly to that cinema on the map.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Map;



                  
