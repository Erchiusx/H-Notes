let img,imgs,imgdb=new Database("img");

async function init_img()
{
	img={};
	imgs={};
	return new Promise(resolve=>
	{
		imgdb.opendb().then(()=>
		{
			let r=aes.dec_data(localStorage.imglist);
			let u="",v="";
			for(let i in r)
			{
				if(r[i]==="|")
				{
					v=u;
					u="";
				}
				else if(r[i]==="#")
				{
					img[v]=parseInt(u);
					u=v="";
				}
				else
					u+=r[i];
			}
			resolve();
		});
	});
}