import React from 'react'
import img1 from '../img/bg 1.jpg'
import img2 from '../img/bg (2).jpg'
import img3 from '../img/bg (3).jpg'
import { CiHeart } from "react-icons/ci";
import img4 from '../img/bg (4).jpg'
import { FiShoppingCart } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
const Main = () => {
    return (
        <div className='w-full border-b-2'>
            <div className='w-full h-[810px] relative'>
                <img className='w-full h-[810px]' src='https://s3-alpha-sig.figma.com/img/2dcb/212d/33bbf08a87d5e8e840a1d3dfa7c106ab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF1BnufNY5MeOz6ncJShKH2eqSJ805hjdokBvX8JHR2q3X0nW5u4ma10MsjoSElGbX3WxnpA~DTtsak~e5y7dFkXfCrnCj71sWEF9JQ2BB9m~fta9eaW0sQljhqF0cse3JxRJntacDd8In-gntsh0FWj2GrWnYLEJFNlctYE-BGxD22upQrR2SPlOEiVhTGt6W7eEhwCdHIGECb0X2q3gLr~h5BXYmoTgP6zlNb6abhbjzr7ttQf3MoN~S9o5jxnEPcZ5f0FkRb25VOMaT6c47MESv5YSG-ldXQQAUMQbcKUBuZkH9H3zRovc9BnliA37rR2wyQpi1DZgivOvnnhbg__' alt='' />
                <div className='absolute top-[251px] left-[353px] max-sm:left-2 w-full max-w-[437px] text-center max-sm:text-left'>
                    <p className='text-[80px] max-sm:text-[40px] font-[400]'>Stylish<br /> Top Trending</p>
                    <p className='text-[16px]'> So soft you don't want to take it off.</p>
                    <div className='text-white bg-[#111111] px-[56.5px] py-[26.5px] max-sm:p-[10px] max-sm:w-[150px] max-sm:text-center rounded-full'>Explore Now</div>
                </div>
                <div className='absolute bg-[#111111] hidden sm:flex right-[30px] top-[48%] text-white p-[19.2px]  items-center justify-center rounded-full'>
                    <span><FaChevronRight /></span>
                </div>
                <div className='absolute left-[49%] bottom-[30px] text-gray-500 text-[50px]'>
                    <p>.<span className='text-black text-[50px]'>.</span>.</p>
                </div>
            </div>
            <div className='text-center mt-[100px] mx-auto w-full max-w-[1410px]'>
                <span className='text-[45px] max-sm:text-[35px]'>Featured Collections</span>
                <p className='mb-[40px] max-sm:text-[15px] max-sm:mx-[15px]'>Elevate your style with our chic featured collection—where fashion meets flair effortlessly.</p>
                <div className='flex'>
                    <div className='w-full max-w-[450px] max-h-[730px] h-[full] relative'>
                        <img src={img1} alt="" />
                        <p className='absolute left-[40%] bottom-[30px] px-[50px] py-[19.5px] bg-white rounded-full ]'>Clothing</p>
                    </div>
                    <div className='mx-[30px]'>
                        <div className=' relative'>
                            <img className='mb-[30px]' src={img4} alt="" />
                            <p className='absolute left-[35%] bottom-[30px] px-[50px] py-[19.5px] bg-white rounded-full ]'>Sunglasses</p>
                        </div>

                        <div className=' relative'>
                            <img src={img2} alt="" />
                            <p className='absolute left-[35%] bottom-[30px] px-[63px] py-[19.5px] bg-white rounded-full ]'>Bags</p>
                        </div>
                    </div>
                    <div className='w-full max-w-[450px] max-h-[730px] h-[full] relative'>
                        <img src={img3} alt="" />
                        <p className='absolute left-[40%] bottom-[30px] px-[50px] py-[19.5px] bg-white rounded-full ]'>Sneaker</p>
                    </div>
                </div>
            </div>
            <div className='mb-[100px]'>
                <div className='flex flex-col  text-center pt-[157px] mx-[auto] w-full max-w-[1410px]'>
                    <span className='text-[45px] max-sm:text-[35px]'>New Arrivals</span>
                    <p className='text-[#555555] mb-[40px] max-sm:text-[15px] max-sm:mx-[15px]'>Here’s some of our new arrivals products people are in love with.</p>
                    <div className='flex '>
                        <div className='w-full max-sm:hidden max-w-[350px] h-full max-h-[558px] mr-[30px] '>
                            <img className='w-full max-h-[440px]' src='https://s3-alpha-sig.figma.com/img/7435/3759/5772b76b2e67be0c09a5464a7651eeee?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GGPFPnukGPs3bULfXEHZ3oeGzhEzf~2LkWvUsRf~FeU24leCKVhs2ivehUM9bDsTy8CCEEVMWEEmtvh-MWuiFa7~aeNGuiWKDEC9cLkqzKmSXVzahZLVykHkF7UiY1BzmN~FacFcQM5CIsTf4PwWWC8r~r0yo7wnxwCUyJTBAo6vcBa3cRAxRGQ96omc7otRWOrep6wrHpgaJL56XD4~rFySgP2seShm8-CUhAzW1MRmrsF971Tve3nECZcWrGah46-SLe9iUvDz2ZNOZa4LA-gFq-LSpptrR04iZ~CMi4w3p~8Q4KA~5goepGa~rmFPf6JUxzHiv2gkCIQBcK9zdg__' alt='' />
                            <div className='flex  mt-3 flex-col justify-start  w-full max-w-[162px] gap-2 text-left'>
                                <p>Square Textured Striped</p>
                                <p><svg width="54" height="10" viewBox="0 0 54 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.96853 3.78143C10.0011 3.88335 10.0043 3.98868 9.9783 4.0974C9.95226 4.20612 9.89692 4.29785 9.81228 4.37259L7.63455 6.37033L8.27908 9.32616C8.29861 9.43488 8.28885 9.5402 8.24978 9.64213C8.21723 9.74405 8.15864 9.82899 8.074 9.89694C7.98286 9.96489 7.8852 9.99887 7.78103 9.99887C7.67687 10.0057 7.57921 9.98188 7.48806 9.92752L4.99783 8.36806L2.5076 9.92752C2.46853 9.94791 2.42296 9.96489 2.37088 9.97848C2.3253 9.99207 2.27973 9.99887 2.23416 9.99887C2.18207 9.99887 2.12674 9.98868 2.06814 9.96829C2.01606 9.9547 1.96723 9.93092 1.92166 9.89694C1.83702 9.82899 1.77517 9.74405 1.73611 9.64213C1.70356 9.5402 1.69705 9.43488 1.71658 9.32616L2.36111 6.37033L0.183377 4.37259C0.0987413 4.29785 0.0434028 4.20612 0.0173611 4.0974C-0.00868056 3.98868 -0.00542535 3.88335 0.0271267 3.78143C0.0596788 3.67271 0.115017 3.58437 0.193142 3.51642C0.277778 3.44847 0.372179 3.4077 0.476345 3.39411L3.36697 3.12911L4.50955 0.336353C4.54861 0.234428 4.61372 0.152888 4.70486 0.0917327C4.79601 0.0305776 4.89366 0 4.99783 0C5.102 0 5.19965 0.0305776 5.2908 0.0917327C5.38194 0.152888 5.44705 0.234428 5.48611 0.336353L6.62869 3.12911L9.51931 3.39411C9.62348 3.4077 9.71463 3.44847 9.79275 3.51642C9.87739 3.58437 9.93598 3.67271 9.96853 3.78143Z" fill="#111111" />
                                    <path d="M20.9641 3.78143C20.9967 3.88335 20.9999 3.98868 20.9739 4.0974C20.9479 4.20612 20.8925 4.29785 20.8079 4.37259L18.6302 6.37033L19.2747 9.32616C19.2942 9.43488 19.2845 9.5402 19.2454 9.64213C19.2128 9.74405 19.1542 9.82899 19.0696 9.89694C18.9785 9.96489 18.8808 9.99887 18.7766 9.99887C18.6725 10.0057 18.5748 9.98188 18.4837 9.92752L15.9934 8.36806L13.5032 9.92752C13.4641 9.94791 13.4186 9.96489 13.3665 9.97848C13.3209 9.99207 13.2753 9.99887 13.2298 9.99887C13.1777 9.99887 13.1223 9.98868 13.0637 9.96829C13.0117 9.9547 12.9628 9.93092 12.9173 9.89694C12.8326 9.82899 12.7708 9.74405 12.7317 9.64213C12.6992 9.5402 12.6927 9.43488 12.7122 9.32616L13.3567 6.37033L11.179 4.37259C11.0943 4.29785 11.039 4.20612 11.013 4.0974C10.9869 3.98868 10.9902 3.88335 11.0227 3.78143C11.0553 3.67271 11.1106 3.58437 11.1887 3.51642C11.2734 3.44847 11.3678 3.4077 11.472 3.39411L14.3626 3.12911L15.5052 0.336353C15.5442 0.234428 15.6093 0.152888 15.7005 0.0917327C15.7916 0.0305776 15.8893 0 15.9934 0C16.0976 0 16.1953 0.0305776 16.2864 0.0917327C16.3776 0.152888 16.4427 0.234428 16.4817 0.336353L17.6243 3.12911L20.5149 3.39411C20.6191 3.4077 20.7102 3.44847 20.7884 3.51642C20.873 3.58437 20.9316 3.67271 20.9641 3.78143Z" fill="#111111" />
                                    <path d="M31.9597 3.78143C31.9923 3.88335 31.9956 3.98868 31.9695 4.0974C31.9435 4.20612 31.8881 4.29785 31.8035 4.37259L29.6258 6.37033L30.2703 9.32616C30.2898 9.43488 30.2801 9.5402 30.241 9.64213C30.2084 9.74405 30.1498 9.82899 30.0652 9.89694C29.9741 9.96489 29.8764 9.99887 29.7722 9.99887C29.6681 10.0057 29.5704 9.98188 29.4793 9.92752L26.989 8.36806L24.4988 9.92752C24.4597 9.94791 24.4142 9.96489 24.3621 9.97848C24.3165 9.99207 24.2709 9.99887 24.2254 9.99887C24.1733 9.99887 24.1179 9.98868 24.0594 9.96829C24.0073 9.9547 23.9584 9.93092 23.9129 9.89694C23.8282 9.82899 23.7664 9.74405 23.7273 9.64213C23.6948 9.5402 23.6883 9.43488 23.7078 9.32616L24.3523 6.37033L22.1746 4.37259C22.09 4.29785 22.0346 4.20612 22.0086 4.0974C21.9825 3.98868 21.9858 3.88335 22.0183 3.78143C22.0509 3.67271 22.1062 3.58437 22.1844 3.51642C22.269 3.44847 22.3634 3.4077 22.4676 3.39411L25.3582 3.12911L26.5008 0.336353C26.5398 0.234428 26.6049 0.152888 26.6961 0.0917327C26.7872 0.0305776 26.8849 0 26.989 0C27.0932 0 27.1909 0.0305776 27.282 0.0917327C27.3732 0.152888 27.4383 0.234428 27.4773 0.336353L28.6199 3.12911L31.5105 3.39411C31.6147 3.4077 31.7058 3.44847 31.784 3.51642C31.8686 3.58437 31.9272 3.67271 31.9597 3.78143Z" fill="#111111" />
                                    <path d="M42.9556 3.78143C42.9881 3.88335 42.9914 3.98868 42.9654 4.0974C42.9393 4.20612 42.884 4.29785 42.7993 4.37259L40.6216 6.37033L41.2661 9.32616C41.2857 9.43488 41.2759 9.5402 41.2368 9.64213C41.2043 9.74405 41.1457 9.82899 41.0611 9.89694C40.9699 9.96489 40.8723 9.99887 40.7681 9.99887C40.6639 10.0057 40.5663 9.98188 40.4751 9.92752L37.9849 8.36806L35.4947 9.92752C35.4556 9.94791 35.41 9.96489 35.3579 9.97848C35.3124 9.99207 35.2668 9.99887 35.2212 9.99887C35.1691 9.99887 35.1138 9.98868 35.0552 9.96829C35.0031 9.9547 34.9543 9.93092 34.9087 9.89694C34.8241 9.82899 34.7622 9.74405 34.7232 9.64213C34.6906 9.5402 34.6841 9.43488 34.7036 9.32616L35.3482 6.37033L33.1704 4.37259C33.0858 4.29785 33.0305 4.20612 33.0044 4.0974C32.9784 3.98868 32.9816 3.88335 33.0142 3.78143C33.0467 3.67271 33.1021 3.58437 33.1802 3.51642C33.2648 3.44847 33.3592 3.4077 33.4634 3.39411L36.354 3.12911L37.4966 0.336353C37.5357 0.234428 37.6008 0.152888 37.6919 0.0917327C37.7831 0.0305776 37.8807 0 37.9849 0C38.0891 0 38.1867 0.0305776 38.2779 0.0917327C38.369 0.152888 38.4341 0.234428 38.4732 0.336353L39.6157 3.12911L42.5064 3.39411C42.6105 3.4077 42.7017 3.44847 42.7798 3.51642C42.8644 3.58437 42.923 3.67271 42.9556 3.78143Z" fill="#111111" />
                                    <path d="M51.7502 9.99886C51.8551 10.0006 51.9573 9.96365 52.0389 9.89449C52.1254 9.83625 52.189 9.74734 52.2181 9.64399C52.2474 9.54189 52.2474 9.43298 52.2181 9.33088L51.6009 6.36671L53.7711 4.3732C53.8609 4.30709 53.9274 4.21168 53.9602 4.10183C53.9851 3.99556 53.9851 3.88455 53.9602 3.77828C53.9316 3.6719 53.8682 3.57951 53.781 3.51734C53.704 3.45067 53.611 3.40736 53.5122 3.3921L50.6053 3.13117L49.4705 0.333991C49.4295 0.234198 49.3599 0.150279 49.2714 0.093935C49.1862 0.0332073 49.0857 0.000500933 48.9827 0V8.34978L51.4615 9.9258C51.5484 9.98039 51.6491 10.0059 51.7502 9.99886Z" fill="#C8C8C8" />
                                    <path d="M46.2112 9.99886C46.1063 10.0006 46.0042 9.96365 45.9225 9.89449C45.8361 9.83625 45.7725 9.74734 45.7434 9.64399C45.714 9.54189 45.714 9.43298 45.7434 9.33088L46.3606 6.36671L44.1904 4.3732C44.1005 4.30709 44.034 4.21168 44.0012 4.10183C43.9763 3.99556 43.9763 3.88455 44.0012 3.77828C44.0298 3.6719 44.0933 3.57951 44.1804 3.51734C44.2574 3.45067 44.3504 3.40736 44.4492 3.3921L47.3561 3.13117L48.491 0.333991C48.5319 0.234198 48.6015 0.150279 48.6901 0.093935C48.7752 0.0332073 48.8758 0.000500933 48.9788 0V8.34978L46.4999 9.9258C46.413 9.98039 46.3123 10.0059 46.2112 9.99886Z" fill="#111111" />
                                </svg>
                                </p>
                                <p>$150.00</p>
                                <p className='mr-[3px]'>
                                    <span className='px-3 mr-[3px] bg-[#272D43] border-2px  border rounded-full'></span>
                                    <span className='px-3 mr-[3px] bg-[#A93A3A] rounded-full'></span>
                                    <span className='px-3 mr-[3px] bg-[#E1D6C7] border-2px  border rounded-full'></span>
                                </p>
                            </div>
                        </div>
                        <div className='w-full relative max-w-[350px] h-full max-h-[558px] mr-[30px]'>
                            <img className='w-full max-h-[440px]' src='https://s3-alpha-sig.figma.com/img/5146/3818/ac23dddbf75c03f835748d8081621032?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IGknmDm05KRqdsbQdah~yStWGbgpOdHcyQz-t-CqYp2piHy0y-cjVvrNFq88~Iwo9RFlg-ZT4VsVDp2YZ-zK3tTv1oYVrWHv0CINfN8oXxFweK4Fy1En3OLbjHYpIK9AweOjmEmJcLoxwSJly-vEYuMGC9AiqmmD00l8scwOpWLy4S2Ren7gvHoLZlSnpWEssngdCy6h0W3LrshztnmfFVu~CXnuxBj3II4SrjNu0Fl6mOaqKARHN9UO2NA3xNQSslvs1zp5cQ7~JCd2ilwEr5jNFyBF-IbkhCgKSUV1Xgfe3XSmuUgKDRs73~MihqMkqOomW-kHjoLwL~WFatlJRQ__' alt='' />
                            <div className='flex mt-3 flex-col justify-start  w-full max-w-[162px] text-left gap-2'>
                                <p>Square Textured Striped</p>
                                <p>
                                    <svg width="54" height="10" viewBox="0 0 54 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.96853 3.78143C10.0011 3.88335 10.0043 3.98868 9.9783 4.0974C9.95226 4.20612 9.89692 4.29785 9.81228 4.37259L7.63455 6.37033L8.27908 9.32616C8.29861 9.43488 8.28885 9.5402 8.24978 9.64213C8.21723 9.74405 8.15864 9.82899 8.074 9.89694C7.98286 9.96489 7.8852 9.99887 7.78103 9.99887C7.67687 10.0057 7.57921 9.98188 7.48806 9.92752L4.99783 8.36806L2.5076 9.92752C2.46853 9.94791 2.42296 9.96489 2.37088 9.97848C2.3253 9.99207 2.27973 9.99887 2.23416 9.99887C2.18207 9.99887 2.12674 9.98868 2.06814 9.96829C2.01606 9.9547 1.96723 9.93092 1.92166 9.89694C1.83702 9.82899 1.77517 9.74405 1.73611 9.64213C1.70356 9.5402 1.69705 9.43488 1.71658 9.32616L2.36111 6.37033L0.183377 4.37259C0.0987413 4.29785 0.0434028 4.20612 0.0173611 4.0974C-0.00868056 3.98868 -0.00542535 3.88335 0.0271267 3.78143C0.0596788 3.67271 0.115017 3.58437 0.193142 3.51642C0.277778 3.44847 0.372179 3.4077 0.476345 3.39411L3.36697 3.12911L4.50955 0.336353C4.54861 0.234428 4.61372 0.152888 4.70486 0.0917327C4.79601 0.0305776 4.89366 0 4.99783 0C5.102 0 5.19965 0.0305776 5.2908 0.0917327C5.38194 0.152888 5.44705 0.234428 5.48611 0.336353L6.62869 3.12911L9.51931 3.39411C9.62348 3.4077 9.71463 3.44847 9.79275 3.51642C9.87739 3.58437 9.93598 3.67271 9.96853 3.78143Z" fill="#111111" />
                                        <path d="M20.9641 3.78143C20.9967 3.88335 20.9999 3.98868 20.9739 4.0974C20.9479 4.20612 20.8925 4.29785 20.8079 4.37259L18.6302 6.37033L19.2747 9.32616C19.2942 9.43488 19.2845 9.5402 19.2454 9.64213C19.2128 9.74405 19.1542 9.82899 19.0696 9.89694C18.9785 9.96489 18.8808 9.99887 18.7766 9.99887C18.6725 10.0057 18.5748 9.98188 18.4837 9.92752L15.9934 8.36806L13.5032 9.92752C13.4641 9.94791 13.4186 9.96489 13.3665 9.97848C13.3209 9.99207 13.2753 9.99887 13.2298 9.99887C13.1777 9.99887 13.1223 9.98868 13.0637 9.96829C13.0117 9.9547 12.9628 9.93092 12.9173 9.89694C12.8326 9.82899 12.7708 9.74405 12.7317 9.64213C12.6992 9.5402 12.6927 9.43488 12.7122 9.32616L13.3567 6.37033L11.179 4.37259C11.0943 4.29785 11.039 4.20612 11.013 4.0974C10.9869 3.98868 10.9902 3.88335 11.0227 3.78143C11.0553 3.67271 11.1106 3.58437 11.1887 3.51642C11.2734 3.44847 11.3678 3.4077 11.472 3.39411L14.3626 3.12911L15.5052 0.336353C15.5442 0.234428 15.6093 0.152888 15.7005 0.0917327C15.7916 0.0305776 15.8893 0 15.9934 0C16.0976 0 16.1953 0.0305776 16.2864 0.0917327C16.3776 0.152888 16.4427 0.234428 16.4817 0.336353L17.6243 3.12911L20.5149 3.39411C20.6191 3.4077 20.7102 3.44847 20.7884 3.51642C20.873 3.58437 20.9316 3.67271 20.9641 3.78143Z" fill="#111111" />
                                        <path d="M31.9599 3.78143C31.9924 3.88335 31.9957 3.98868 31.9696 4.0974C31.9436 4.20612 31.8883 4.29785 31.8036 4.37259L29.6259 6.37033L30.2704 9.32616C30.2899 9.43488 30.2802 9.5402 30.2411 9.64213C30.2086 9.74405 30.15 9.82899 30.0653 9.89694C29.9742 9.96489 29.8765 9.99887 29.7724 9.99887C29.6682 10.0057 29.5705 9.98188 29.4794 9.92752L26.9892 8.36806L24.4989 9.92752C24.4599 9.94791 24.4143 9.96489 24.3622 9.97848C24.3166 9.99207 24.2711 9.99887 24.2255 9.99887C24.1734 9.99887 24.1181 9.98868 24.0595 9.96829C24.0074 9.9547 23.9586 9.93092 23.913 9.89694C23.8284 9.82899 23.7665 9.74405 23.7274 9.64213C23.6949 9.5402 23.6884 9.43488 23.7079 9.32616L24.3524 6.37033L22.1747 4.37259C22.0901 4.29785 22.0347 4.20612 22.0087 4.0974C21.9827 3.98868 21.9859 3.88335 22.0185 3.78143C22.051 3.67271 22.1064 3.58437 22.1845 3.51642C22.2691 3.44847 22.3635 3.4077 22.4677 3.39411L25.3583 3.12911L26.5009 0.336353C26.5399 0.234428 26.605 0.152888 26.6962 0.0917327C26.7873 0.0305776 26.885 0 26.9892 0C27.0933 0 27.191 0.0305776 27.2821 0.0917327C27.3733 0.152888 27.4384 0.234428 27.4774 0.336353L28.62 3.12911L31.5106 3.39411C31.6148 3.4077 31.706 3.44847 31.7841 3.51642C31.8687 3.58437 31.9273 3.67271 31.9599 3.78143Z" fill="#111111" />
                                        <path d="M42.9555 3.78143C42.988 3.88335 42.9913 3.98868 42.9652 4.0974C42.9392 4.20612 42.8839 4.29785 42.7992 4.37259L40.6215 6.37033L41.266 9.32616C41.2855 9.43488 41.2758 9.5402 41.2367 9.64213C41.2042 9.74405 41.1456 9.82899 41.0609 9.89694C40.9698 9.96489 40.8721 9.99887 40.768 9.99887C40.6638 10.0057 40.5661 9.98188 40.475 9.92752L37.9848 8.36806L35.4945 9.92752C35.4555 9.94791 35.4099 9.96489 35.3578 9.97848C35.3122 9.99207 35.2667 9.99887 35.2211 9.99887C35.169 9.99887 35.1137 9.98868 35.0551 9.96829C35.003 9.9547 34.9542 9.93092 34.9086 9.89694C34.824 9.82899 34.7621 9.74405 34.723 9.64213C34.6905 9.5402 34.684 9.43488 34.7035 9.32616L35.348 6.37033L33.1703 4.37259C33.0857 4.29785 33.0303 4.20612 33.0043 4.0974C32.9783 3.98868 32.9815 3.88335 33.0141 3.78143C33.0466 3.67271 33.102 3.58437 33.1801 3.51642C33.2647 3.44847 33.3591 3.4077 33.4633 3.39411L36.3539 3.12911L37.4965 0.336353C37.5355 0.234428 37.6007 0.152888 37.6918 0.0917327C37.7829 0.0305776 37.8806 0 37.9848 0C38.0889 0 38.1866 0.0305776 38.2777 0.0917327C38.3689 0.152888 38.434 0.234428 38.473 0.336353L39.6156 3.12911L42.5063 3.39411C42.6104 3.4077 42.7016 3.44847 42.7797 3.51642C42.8643 3.58437 42.9229 3.67271 42.9555 3.78143Z" fill="#111111" />
                                        <path d="M53.9512 3.78143C53.9838 3.88335 53.987 3.98868 53.961 4.0974C53.9349 4.20612 53.8796 4.29785 53.7949 4.37259L51.6172 6.37033L52.2617 9.32616C52.2813 9.43488 52.2715 9.5402 52.2324 9.64213C52.1999 9.74405 52.1413 9.82899 52.0567 9.89694C51.9655 9.96489 51.8679 9.99887 51.7637 9.99887C51.6595 10.0057 51.5619 9.98188 51.4707 9.92752L48.9805 8.36806L46.4903 9.92752C46.4512 9.94791 46.4056 9.96489 46.3535 9.97848C46.308 9.99207 46.2624 9.99887 46.2168 9.99887C46.1647 9.99887 46.1094 9.98868 46.0508 9.96829C45.9987 9.9547 45.9499 9.93092 45.9043 9.89694C45.8197 9.82899 45.7578 9.74405 45.7188 9.64213C45.6862 9.5402 45.6797 9.43488 45.6992 9.32616L46.3438 6.37033L44.166 4.37259C44.0814 4.29785 44.0261 4.20612 44 4.0974C43.974 3.98868 43.9772 3.88335 44.0098 3.78143C44.0423 3.67271 44.0977 3.58437 44.1758 3.51642C44.2604 3.44847 44.3548 3.4077 44.459 3.39411L47.3496 3.12911L48.4922 0.336353C48.5313 0.234428 48.5964 0.152888 48.6875 0.0917327C48.7787 0.0305776 48.8763 0 48.9805 0C49.0847 0 49.1823 0.0305776 49.2735 0.0917327C49.3646 0.152888 49.4297 0.234428 49.4688 0.336353L50.6114 3.12911L53.502 3.39411C53.6061 3.4077 53.6973 3.44847 53.7754 3.51642C53.8601 3.58437 53.9186 3.67271 53.9512 3.78143Z" fill="#111111" />
                                    </svg>


                                </p>
                                <p>$150.00</p>
                                <p className='mr-[3px]'>
                                    <span className='px-3 mr-[3px] bg-[#EEEEEE] border-2px  border rounded-full'></span>
                                    <span className='px-3 mr-[3px] bg-[#D6D6D6] rounded-full'></span>
                                    <span className='px-3 mr-[3px] bg-[#DDDDDD] border-2px  border rounded-full'></span>
                                </p>
                            </div>
                            <div className=' hidden flex-col max-sm:flex absolute top-[10px] right-1'>
                                <span className='bg-white rounded-full p-3 mb-3'><CiHeart /></span>
                                <span className='bg-white rounded-full p-3 mb-3'><FiShoppingCart /></span>
                                <span className='bg-white rounded-full p-3'><FaEye /></span>
                            </div>
                        </div>
                        <div className='w-full relative max-w-[350px] h-full max-h-[558px] mr-[30px]'>
                            <img className='w-full max-h-[440px]' src='https://s3-alpha-sig.figma.com/img/e2d9/5a56/b90f204b8ecf9edc684c64721eb57605?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ci1Vt3~pr3K8kdLvcBvU-g0Xk1na4ro7h8rzJq9zqr4lyznmL1tSWTgPd5wkulc7Z7cRgJ1aG5QKUqq-xz6awgHyXgxAuTlWx0cpSXe6EfJFwAOFTX67aCePinDZ6zlTMybDzyEGdGG7qqF49ZhgxZA6v-4FtETq1~v1CTKuABuzmM9G1Lo71xfEyKeg~K3LmVFOKDDGKzdc04r~AO8G6uzvQ7l7DRc1RTXyOioSpOqKoCAmD7ZQIgIb75t0C0vo4Oz1pE6Axamm36F76DxiY2gNqBppMs-Vco3CEtxzDooDNIsc8f3kZYGWqem7B-PhEMrXa1zuvSXAGR-8VNp1Ow__' alt='' />
                            <div className='flex mt-3 flex-col justify-start w-full max-w-[162px] text-left gap-2'>
                                <p>Square Textured Striped</p>
                                <p>
                                <svg width="54" height="10" viewBox="0 0 54 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.96853 3.78143C10.0011 3.88335 10.0043 3.98868 9.9783 4.0974C9.95226 4.20612 9.89692 4.29785 9.81228 4.37259L7.63455 6.37033L8.27908 9.32616C8.29861 9.43488 8.28885 9.5402 8.24978 9.64213C8.21723 9.74405 8.15864 9.82899 8.074 9.89694C7.98286 9.96489 7.8852 9.99887 7.78103 9.99887C7.67687 10.0057 7.57921 9.98188 7.48806 9.92752L4.99783 8.36806L2.5076 9.92752C2.46853 9.94791 2.42296 9.96489 2.37088 9.97848C2.3253 9.99207 2.27973 9.99887 2.23416 9.99887C2.18207 9.99887 2.12674 9.98868 2.06814 9.96829C2.01606 9.9547 1.96723 9.93092 1.92166 9.89694C1.83702 9.82899 1.77517 9.74405 1.73611 9.64213C1.70356 9.5402 1.69705 9.43488 1.71658 9.32616L2.36111 6.37033L0.183377 4.37259C0.0987413 4.29785 0.0434028 4.20612 0.0173611 4.0974C-0.00868056 3.98868 -0.00542535 3.88335 0.0271267 3.78143C0.0596788 3.67271 0.115017 3.58437 0.193142 3.51642C0.277778 3.44847 0.372179 3.4077 0.476345 3.39411L3.36697 3.12911L4.50955 0.336353C4.54861 0.234428 4.61372 0.152888 4.70486 0.0917327C4.79601 0.0305776 4.89366 0 4.99783 0C5.102 0 5.19965 0.0305776 5.2908 0.0917327C5.38194 0.152888 5.44705 0.234428 5.48611 0.336353L6.62869 3.12911L9.51931 3.39411C9.62348 3.4077 9.71463 3.44847 9.79275 3.51642C9.87739 3.58437 9.93598 3.67271 9.96853 3.78143Z" fill="#111111" />
                                    <path d="M20.9641 3.78143C20.9967 3.88335 20.9999 3.98868 20.9739 4.0974C20.9479 4.20612 20.8925 4.29785 20.8079 4.37259L18.6302 6.37033L19.2747 9.32616C19.2942 9.43488 19.2845 9.5402 19.2454 9.64213C19.2128 9.74405 19.1542 9.82899 19.0696 9.89694C18.9785 9.96489 18.8808 9.99887 18.7766 9.99887C18.6725 10.0057 18.5748 9.98188 18.4837 9.92752L15.9934 8.36806L13.5032 9.92752C13.4641 9.94791 13.4186 9.96489 13.3665 9.97848C13.3209 9.99207 13.2753 9.99887 13.2298 9.99887C13.1777 9.99887 13.1223 9.98868 13.0637 9.96829C13.0117 9.9547 12.9628 9.93092 12.9173 9.89694C12.8326 9.82899 12.7708 9.74405 12.7317 9.64213C12.6992 9.5402 12.6927 9.43488 12.7122 9.32616L13.3567 6.37033L11.179 4.37259C11.0943 4.29785 11.039 4.20612 11.013 4.0974C10.9869 3.98868 10.9902 3.88335 11.0227 3.78143C11.0553 3.67271 11.1106 3.58437 11.1887 3.51642C11.2734 3.44847 11.3678 3.4077 11.472 3.39411L14.3626 3.12911L15.5052 0.336353C15.5442 0.234428 15.6093 0.152888 15.7005 0.0917327C15.7916 0.0305776 15.8893 0 15.9934 0C16.0976 0 16.1953 0.0305776 16.2864 0.0917327C16.3776 0.152888 16.4427 0.234428 16.4817 0.336353L17.6243 3.12911L20.5149 3.39411C20.6191 3.4077 20.7102 3.44847 20.7884 3.51642C20.873 3.58437 20.9316 3.67271 20.9641 3.78143Z" fill="#111111" />
                                    <path d="M31.9597 3.78143C31.9923 3.88335 31.9956 3.98868 31.9695 4.0974C31.9435 4.20612 31.8881 4.29785 31.8035 4.37259L29.6258 6.37033L30.2703 9.32616C30.2898 9.43488 30.2801 9.5402 30.241 9.64213C30.2084 9.74405 30.1498 9.82899 30.0652 9.89694C29.9741 9.96489 29.8764 9.99887 29.7722 9.99887C29.6681 10.0057 29.5704 9.98188 29.4793 9.92752L26.989 8.36806L24.4988 9.92752C24.4597 9.94791 24.4142 9.96489 24.3621 9.97848C24.3165 9.99207 24.2709 9.99887 24.2254 9.99887C24.1733 9.99887 24.1179 9.98868 24.0594 9.96829C24.0073 9.9547 23.9584 9.93092 23.9129 9.89694C23.8282 9.82899 23.7664 9.74405 23.7273 9.64213C23.6948 9.5402 23.6883 9.43488 23.7078 9.32616L24.3523 6.37033L22.1746 4.37259C22.09 4.29785 22.0346 4.20612 22.0086 4.0974C21.9825 3.98868 21.9858 3.88335 22.0183 3.78143C22.0509 3.67271 22.1062 3.58437 22.1844 3.51642C22.269 3.44847 22.3634 3.4077 22.4676 3.39411L25.3582 3.12911L26.5008 0.336353C26.5398 0.234428 26.6049 0.152888 26.6961 0.0917327C26.7872 0.0305776 26.8849 0 26.989 0C27.0932 0 27.1909 0.0305776 27.282 0.0917327C27.3732 0.152888 27.4383 0.234428 27.4773 0.336353L28.6199 3.12911L31.5105 3.39411C31.6147 3.4077 31.7058 3.44847 31.784 3.51642C31.8686 3.58437 31.9272 3.67271 31.9597 3.78143Z" fill="#111111" />
                                    <path d="M42.9556 3.78143C42.9881 3.88335 42.9914 3.98868 42.9654 4.0974C42.9393 4.20612 42.884 4.29785 42.7993 4.37259L40.6216 6.37033L41.2661 9.32616C41.2857 9.43488 41.2759 9.5402 41.2368 9.64213C41.2043 9.74405 41.1457 9.82899 41.0611 9.89694C40.9699 9.96489 40.8723 9.99887 40.7681 9.99887C40.6639 10.0057 40.5663 9.98188 40.4751 9.92752L37.9849 8.36806L35.4947 9.92752C35.4556 9.94791 35.41 9.96489 35.3579 9.97848C35.3124 9.99207 35.2668 9.99887 35.2212 9.99887C35.1691 9.99887 35.1138 9.98868 35.0552 9.96829C35.0031 9.9547 34.9543 9.93092 34.9087 9.89694C34.8241 9.82899 34.7622 9.74405 34.7232 9.64213C34.6906 9.5402 34.6841 9.43488 34.7036 9.32616L35.3482 6.37033L33.1704 4.37259C33.0858 4.29785 33.0305 4.20612 33.0044 4.0974C32.9784 3.98868 32.9816 3.88335 33.0142 3.78143C33.0467 3.67271 33.1021 3.58437 33.1802 3.51642C33.2648 3.44847 33.3592 3.4077 33.4634 3.39411L36.354 3.12911L37.4966 0.336353C37.5357 0.234428 37.6008 0.152888 37.6919 0.0917327C37.7831 0.0305776 37.8807 0 37.9849 0C38.0891 0 38.1867 0.0305776 38.2779 0.0917327C38.369 0.152888 38.4341 0.234428 38.4732 0.336353L39.6157 3.12911L42.5064 3.39411C42.6105 3.4077 42.7017 3.44847 42.7798 3.51642C42.8644 3.58437 42.923 3.67271 42.9556 3.78143Z" fill="#111111" />
                                    <path d="M51.7502 9.99886C51.8551 10.0006 51.9573 9.96365 52.0389 9.89449C52.1254 9.83625 52.189 9.74734 52.2181 9.64399C52.2474 9.54189 52.2474 9.43298 52.2181 9.33088L51.6009 6.36671L53.7711 4.3732C53.8609 4.30709 53.9274 4.21168 53.9602 4.10183C53.9851 3.99556 53.9851 3.88455 53.9602 3.77828C53.9316 3.6719 53.8682 3.57951 53.781 3.51734C53.704 3.45067 53.611 3.40736 53.5122 3.3921L50.6053 3.13117L49.4705 0.333991C49.4295 0.234198 49.3599 0.150279 49.2714 0.093935C49.1862 0.0332073 49.0857 0.000500933 48.9827 0V8.34978L51.4615 9.9258C51.5484 9.98039 51.6491 10.0059 51.7502 9.99886Z" fill="#C8C8C8" />
                                    <path d="M46.2112 9.99886C46.1063 10.0006 46.0042 9.96365 45.9225 9.89449C45.8361 9.83625 45.7725 9.74734 45.7434 9.64399C45.714 9.54189 45.714 9.43298 45.7434 9.33088L46.3606 6.36671L44.1904 4.3732C44.1005 4.30709 44.034 4.21168 44.0012 4.10183C43.9763 3.99556 43.9763 3.88455 44.0012 3.77828C44.0298 3.6719 44.0933 3.57951 44.1804 3.51734C44.2574 3.45067 44.3504 3.40736 44.4492 3.3921L47.3561 3.13117L48.491 0.333991C48.5319 0.234198 48.6015 0.150279 48.6901 0.093935C48.7752 0.0332073 48.8758 0.000500933 48.9788 0V8.34978L46.4999 9.9258C46.413 9.98039 46.3123 10.0059 46.2112 9.99886Z" fill="#111111" />
                                </svg>
                                </p>
                                <p>$150.00</p>
                                <p className=''>
                                    <span className='px-3 mr-[3px] bg-[#08382C] border-2px  border rounded-full'></span>
                                    <span className='px-3 mr-[3px] bg-[#492919] rounded-full'></span>
                                    <span className='px-3 bg-[#DFD3C2] border-2px  border rounded-full'></span>
                                </p>
                            </div>
                            <div className=' hidden flex-col max-sm:flex absolute top-[10px] right-1'>
                                <span className='bg-white rounded-full p-3 mb-3'><CiHeart/></span>
                                <span className='bg-white rounded-full p-3 mb-3'><FiShoppingCart /></span>
                                <span className='bg-white rounded-full p-3'><FaEye /></span>
                            </div>
                        </div>
                        <div className='w-full max-w-[350px] max-sm:hidden h-full max-h-[558px] '>
                            <img className='w-full max-h-[440px]' src='https://s3-alpha-sig.figma.com/img/9830/47de/a0387507d33cfd533db6dcf8fe5f8335?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VkPcAggensqts7RAjdNcx~s7BEH8JJ6s853fyyEKf5676NNcjobJ52w3POC1MmadYzjIUitgZ4VNWwkQpMLTvwhtUMHdlDvRry3EEdL6Aqt0V-e97aF6WenLVQIy-wTdrJ2qtJFxK7OvLGMEZkcDQZejZZiPKaDnTOSYAwOZ2i0OnfOXIGx45vwRa0CIAJyw4t8kiknxa1ZHOlBPCxqKZhPlf937YNe3HPdI~pZtbqGWM7ICvVwS~~w3ng1wG240RREMGR-Jc54FWva00ihQmZvMoxJzjJN19yPz4yynQn3K3G7AY19lmDkUx~zdBJ0Ot6NEzksIag9gtf4Uvj~RPQ__' alt='' />
                            <div className='flex  mt-3 flex-col justify-start  w-full max-w-[162px] text-left gap-2'>
                                <p>Square Textured Striped</p>
                                <p className='float-left gap-[10px]'>
                                    <svg width="54" height="10" viewBox="0 0 54 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.96853 3.78143C10.0011 3.88335 10.0043 3.98868 9.9783 4.0974C9.95226 4.20612 9.89692 4.29785 9.81228 4.37259L7.63455 6.37033L8.27908 9.32616C8.29861 9.43488 8.28885 9.5402 8.24978 9.64213C8.21723 9.74405 8.15864 9.82899 8.074 9.89694C7.98286 9.96489 7.8852 9.99887 7.78103 9.99887C7.67687 10.0057 7.57921 9.98188 7.48806 9.92752L4.99783 8.36806L2.5076 9.92752C2.46853 9.94791 2.42296 9.96489 2.37088 9.97848C2.3253 9.99207 2.27973 9.99887 2.23416 9.99887C2.18207 9.99887 2.12674 9.98868 2.06814 9.96829C2.01606 9.9547 1.96723 9.93092 1.92166 9.89694C1.83702 9.82899 1.77517 9.74405 1.73611 9.64213C1.70356 9.5402 1.69705 9.43488 1.71658 9.32616L2.36111 6.37033L0.183377 4.37259C0.0987413 4.29785 0.0434028 4.20612 0.0173611 4.0974C-0.00868056 3.98868 -0.00542535 3.88335 0.0271267 3.78143C0.0596788 3.67271 0.115017 3.58437 0.193142 3.51642C0.277778 3.44847 0.372179 3.4077 0.476345 3.39411L3.36697 3.12911L4.50955 0.336353C4.54861 0.234428 4.61372 0.152888 4.70486 0.0917327C4.79601 0.0305776 4.89366 0 4.99783 0C5.102 0 5.19965 0.0305776 5.2908 0.0917327C5.38194 0.152888 5.44705 0.234428 5.48611 0.336353L6.62869 3.12911L9.51931 3.39411C9.62348 3.4077 9.71463 3.44847 9.79275 3.51642C9.87739 3.58437 9.93598 3.67271 9.96853 3.78143Z" fill="#111111" />
                                        <path d="M20.9641 3.78143C20.9967 3.88335 20.9999 3.98868 20.9739 4.0974C20.9479 4.20612 20.8925 4.29785 20.8079 4.37259L18.6302 6.37033L19.2747 9.32616C19.2942 9.43488 19.2845 9.5402 19.2454 9.64213C19.2128 9.74405 19.1542 9.82899 19.0696 9.89694C18.9785 9.96489 18.8808 9.99887 18.7766 9.99887C18.6725 10.0057 18.5748 9.98188 18.4837 9.92752L15.9934 8.36806L13.5032 9.92752C13.4641 9.94791 13.4186 9.96489 13.3665 9.97848C13.3209 9.99207 13.2753 9.99887 13.2298 9.99887C13.1777 9.99887 13.1223 9.98868 13.0637 9.96829C13.0117 9.9547 12.9628 9.93092 12.9173 9.89694C12.8326 9.82899 12.7708 9.74405 12.7317 9.64213C12.6992 9.5402 12.6927 9.43488 12.7122 9.32616L13.3567 6.37033L11.179 4.37259C11.0943 4.29785 11.039 4.20612 11.013 4.0974C10.9869 3.98868 10.9902 3.88335 11.0227 3.78143C11.0553 3.67271 11.1106 3.58437 11.1887 3.51642C11.2734 3.44847 11.3678 3.4077 11.472 3.39411L14.3626 3.12911L15.5052 0.336353C15.5442 0.234428 15.6093 0.152888 15.7005 0.0917327C15.7916 0.0305776 15.8893 0 15.9934 0C16.0976 0 16.1953 0.0305776 16.2864 0.0917327C16.3776 0.152888 16.4427 0.234428 16.4817 0.336353L17.6243 3.12911L20.5149 3.39411C20.6191 3.4077 20.7102 3.44847 20.7884 3.51642C20.873 3.58437 20.9316 3.67271 20.9641 3.78143Z" fill="#111111" />
                                        <path d="M31.9599 3.78143C31.9924 3.88335 31.9957 3.98868 31.9696 4.0974C31.9436 4.20612 31.8883 4.29785 31.8036 4.37259L29.6259 6.37033L30.2704 9.32616C30.2899 9.43488 30.2802 9.5402 30.2411 9.64213C30.2086 9.74405 30.15 9.82899 30.0653 9.89694C29.9742 9.96489 29.8765 9.99887 29.7724 9.99887C29.6682 10.0057 29.5705 9.98188 29.4794 9.92752L26.9892 8.36806L24.4989 9.92752C24.4599 9.94791 24.4143 9.96489 24.3622 9.97848C24.3166 9.99207 24.2711 9.99887 24.2255 9.99887C24.1734 9.99887 24.1181 9.98868 24.0595 9.96829C24.0074 9.9547 23.9586 9.93092 23.913 9.89694C23.8284 9.82899 23.7665 9.74405 23.7274 9.64213C23.6949 9.5402 23.6884 9.43488 23.7079 9.32616L24.3524 6.37033L22.1747 4.37259C22.0901 4.29785 22.0347 4.20612 22.0087 4.0974C21.9827 3.98868 21.9859 3.88335 22.0185 3.78143C22.051 3.67271 22.1064 3.58437 22.1845 3.51642C22.2691 3.44847 22.3635 3.4077 22.4677 3.39411L25.3583 3.12911L26.5009 0.336353C26.5399 0.234428 26.605 0.152888 26.6962 0.0917327C26.7873 0.0305776 26.885 0 26.9892 0C27.0933 0 27.191 0.0305776 27.2821 0.0917327C27.3733 0.152888 27.4384 0.234428 27.4774 0.336353L28.62 3.12911L31.5106 3.39411C31.6148 3.4077 31.706 3.44847 31.7841 3.51642C31.8687 3.58437 31.9273 3.67271 31.9599 3.78143Z" fill="#111111" />
                                        <path d="M42.9555 3.78143C42.988 3.88335 42.9913 3.98868 42.9652 4.0974C42.9392 4.20612 42.8839 4.29785 42.7992 4.37259L40.6215 6.37033L41.266 9.32616C41.2855 9.43488 41.2758 9.5402 41.2367 9.64213C41.2042 9.74405 41.1456 9.82899 41.0609 9.89694C40.9698 9.96489 40.8721 9.99887 40.768 9.99887C40.6638 10.0057 40.5661 9.98188 40.475 9.92752L37.9848 8.36806L35.4945 9.92752C35.4555 9.94791 35.4099 9.96489 35.3578 9.97848C35.3122 9.99207 35.2667 9.99887 35.2211 9.99887C35.169 9.99887 35.1137 9.98868 35.0551 9.96829C35.003 9.9547 34.9542 9.93092 34.9086 9.89694C34.824 9.82899 34.7621 9.74405 34.723 9.64213C34.6905 9.5402 34.684 9.43488 34.7035 9.32616L35.348 6.37033L33.1703 4.37259C33.0857 4.29785 33.0303 4.20612 33.0043 4.0974C32.9783 3.98868 32.9815 3.88335 33.0141 3.78143C33.0466 3.67271 33.102 3.58437 33.1801 3.51642C33.2647 3.44847 33.3591 3.4077 33.4633 3.39411L36.3539 3.12911L37.4965 0.336353C37.5355 0.234428 37.6007 0.152888 37.6918 0.0917327C37.7829 0.0305776 37.8806 0 37.9848 0C38.0889 0 38.1866 0.0305776 38.2777 0.0917327C38.3689 0.152888 38.434 0.234428 38.473 0.336353L39.6156 3.12911L42.5063 3.39411C42.6104 3.4077 42.7016 3.44847 42.7797 3.51642C42.8643 3.58437 42.9229 3.67271 42.9555 3.78143Z" fill="#111111" />
                                        <path d="M53.9512 3.78143C53.9838 3.88335 53.987 3.98868 53.961 4.0974C53.9349 4.20612 53.8796 4.29785 53.7949 4.37259L51.6172 6.37033L52.2617 9.32616C52.2813 9.43488 52.2715 9.5402 52.2324 9.64213C52.1999 9.74405 52.1413 9.82899 52.0567 9.89694C51.9655 9.96489 51.8679 9.99887 51.7637 9.99887C51.6595 10.0057 51.5619 9.98188 51.4707 9.92752L48.9805 8.36806L46.4903 9.92752C46.4512 9.94791 46.4056 9.96489 46.3535 9.97848C46.308 9.99207 46.2624 9.99887 46.2168 9.99887C46.1647 9.99887 46.1094 9.98868 46.0508 9.96829C45.9987 9.9547 45.9499 9.93092 45.9043 9.89694C45.8197 9.82899 45.7578 9.74405 45.7188 9.64213C45.6862 9.5402 45.6797 9.43488 45.6992 9.32616L46.3438 6.37033L44.166 4.37259C44.0814 4.29785 44.0261 4.20612 44 4.0974C43.974 3.98868 43.9772 3.88335 44.0098 3.78143C44.0423 3.67271 44.0977 3.58437 44.1758 3.51642C44.2604 3.44847 44.3548 3.4077 44.459 3.39411L47.3496 3.12911L48.4922 0.336353C48.5313 0.234428 48.5964 0.152888 48.6875 0.0917327C48.7787 0.0305776 48.8763 0 48.9805 0C49.0847 0 49.1823 0.0305776 49.2735 0.0917327C49.3646 0.152888 49.4297 0.234428 49.4688 0.336353L50.6114 3.12911L53.502 3.39411C53.6061 3.4077 53.6973 3.44847 53.7754 3.51642C53.8601 3.58437 53.9186 3.67271 53.9512 3.78143Z" fill="#111111" />
                                    </svg>
                                </p>
                                <p className='float-left'>$150.00</p>
                                <p className=''>
                                    <span className='px-3 mr-[3px] bg-[#08382C] border-2px  border rounded-full'></span>
                                    <span className='px-3 mr-[3px] bg-[#492919] rounded-full'></span>
                                    <span className='px-3 bg-[#DFD3C2] border-2px  border rounded-full'></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Main