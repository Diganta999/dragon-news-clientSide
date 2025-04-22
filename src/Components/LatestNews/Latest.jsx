import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Latest = () => {
    return (
        <div>
            <div className='p-2 bg-[#F3F3F3] flex justify-center items-center gap-x-3 w-[70%] mx-auto rounded-sm'>
                <button className='px-4 py-2 font-bold text-white bg-red-500 rounded-sm '> Latest</button>   
                <Marquee >
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link> <br />
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link><br />
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link><br />
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link> <br />
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link> <br />
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link><br />
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link> <br />
                    <Link>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link>
                </Marquee>
            </div>
        </div>
    );
};

export default Latest;