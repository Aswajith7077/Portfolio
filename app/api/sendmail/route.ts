

import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { reqProps } from "@/Components/Contact";
import { email } from "@/Constants/Details";


const Email = (content:reqProps) => {
  return (
    `<section>
      <div>
        <h1>
          Hi I am ${content.firstName} ${content.lastName}
        </h1>
				<p>${content.message}</p>
				<p>Feel Free to contact me</p>
				<h5>${content.email}</h5>
				<h5>${content.phone}</h5>
      </div>
    </section>`
  );
};



export async function POST(req:NextRequest,res:NextResponse){
    const content = await req.json();
    const resend = new Resend(process.env.RESEND_API);

    try{
        const data = await resend.emails.send({
            from:'Portfolio <no-reply@resend.dev>',
            to:email,
            subject:'You have been recognised',
            html:Email(content)
        })
        console.log(data)
        return NextResponse.json(data.data)
    }catch( error ){
        return NextResponse.json({error})
    }
}