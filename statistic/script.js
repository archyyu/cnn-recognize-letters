
function getCnnInputs(e) {
    var t = new convnetjs.Vol(PIXELS, PIXELS, 1, 0);
    for (var n = 0; n < PIXELSSQUARED; n++)
        t.w[n] = e[n];
    return t
}

function getInputs ( img )      // convert img array into normalised input array
{
    let inputs = [];
    for (let i = 0; i < PIXELSSQUARED ; i++)
    {
        let bright = img[i];
        inputs[i] = bright / 255;       // normalise to 0 to 1
    }
    return ( inputs );
}


function findMax (a)
{
    let no1 = 0;
    let no1value = 0;

    for (let i = 0; i < a.length; i++)
    {
        if (a[i] > no1value)
        {
            no1 = i;
            no1value = a[i];
        }
    }

    return no1;
}



function getImage ( img )      // make a P5 image object from a raw data array
{
    let theimage  = createImage (PIXELS, PIXELS);    // make blank image, then populate it
    theimage.loadPixels();

    for (let i = 0; i < PIXELSSQUARED ; i++)
    {
        let bright = img[i];
        let index = i * 4;
        theimage.pixels[index + 0] = bright;
        theimage.pixels[index + 1] = bright;
        theimage.pixels[index + 2] = bright;
        theimage.pixels[index + 3] = 255;
    }

    theimage.updatePixels();
    return theimage;
}

