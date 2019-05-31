function imageMap(img, func) {
  let img2=img.copy();
  for (let i=0; i<img2.width; ++i) {
    for (let j=0; j<img2.height; ++j) {
      img2.setPixel(i, j, func(img2, i, j));
    }
  }
  return img2;
}

function imageMask(img, func, maskValue) { //the func here is the other function that returns a boolean
  let img2=img.copy();
  return imageMap(img2, function (img2, x, y){ //this function is func
    if (func(img2, x, y)===true){ //this func is the other function which returns a boolean value
      return maskValue; //maskValue is an array of size 
    }
    else {
      return img2.getPixel(x, y);
    }
  });
}

function blurPixel(img, x, y) {
  let newImg=img;
  if (x===0) {
    let rm = (6*newImg.getPixel(x, y)[0]);
    let gm = (6*newImg.getPixel(x, y)[1]);
    let bm = (6*newImg.getPixel(x, y)[2]);
    for (let i=0+x; i<5+x && 5+x<newImg.width; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===1) {
    let rm = (5*newImg.getPixel(x, y)[0]);
    let gm = (5*newImg.getPixel(x, y)[1]);
    let bm = (5*newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(0, y)[0];
    gm += newImg.getPixel(0, y)[1];
    bm += newImg.getPixel(0, y)[2];
    for (let i=0+x; i<5+x && 5+x<newImg.width; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===2) {
    let rm = (4*newImg.getPixel(x, y)[0]);
    let gm = (4*newImg.getPixel(x, y)[1]);
    let bm = (4*newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(0, y)[0] + newImg.getPixel(1, y)[0];
    gm += newImg.getPixel(0, y)[1] + newImg.getPixel(1, y)[1];
    bm += newImg.getPixel(0, y)[2] + newImg.getPixel(1, y)[2];
    for (let i=0+x; i<5+x && 5+x<newImg.width; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===3) {
    let rm = (3*newImg.getPixel(x, y)[0]);
    let gm = (3*newImg.getPixel(x, y)[1]);
    let bm = (3*newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(0, y)[0] + newImg.getPixel(1, y)[0] + newImg.getPixel(2, y)[0];
    gm += newImg.getPixel(0, y)[1] + newImg.getPixel(1, y)[1] + newImg.getPixel(2, y)[1];
    bm += newImg.getPixel(0, y)[2] + newImg.getPixel(1, y)[2] + newImg.getPixel(2, y)[2];
    for (let i=0+x; i<5+x && 5+x<newImg.width; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===4) {
    let rm = (2*newImg.getPixel(x, y)[0]);
    let gm = (2*newImg.getPixel(x, y)[1]);
    let bm = (2*newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(0, y)[0] + newImg.getPixel(1, y)[0] + newImg.getPixel(2, y)[0] + newImg.getPixel(3, y)[0];
    gm += newImg.getPixel(0, y)[1] + newImg.getPixel(1, y)[1] + newImg.getPixel(2, y)[1] + newImg.getPixel(3, y)[1];
    bm += newImg.getPixel(0, y)[2] + newImg.getPixel(1, y)[2] + newImg.getPixel(2, y)[2] + newImg.getPixel(3, y)[2];
    for (let i=0+x; i<5+x && 5+x<newImg.width; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===5) {
    let rm = (newImg.getPixel(x, y)[0]);
    let gm = (newImg.getPixel(x, y)[1]);
    let bm = (newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(0, y)[0] + newImg.getPixel(1, y)[0] + newImg.getPixel(2, y)[0] + newImg.getPixel(3, y)[0] + newImg.getPixel(4, y)[0];
    gm += newImg.getPixel(0, y)[1] + newImg.getPixel(1, y)[1] + newImg.getPixel(2, y)[1] + newImg.getPixel(3, y)[1] + newImg.getPixel(4, y)[1];
    bm += newImg.getPixel(0, y)[2] + newImg.getPixel(1, y)[2] + newImg.getPixel(2, y)[2] + newImg.getPixel(3, y)[2] + newImg.getPixel(4, y)[2];
    for (let i=0+x; i<5+x && 5+x<newImg.width; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===newImg.width-1) {
    let rm = (6*newImg.getPixel(x, y)[0]);
    let gm = (6*newImg.getPixel(x, y)[1]);
    let bm = (6*newImg.getPixel(x, y)[2]);
    for (let i=-5+x; i<0+x && -5+x>=0; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===newImg.width-2) {
    let rm = (5*newImg.getPixel(x, y)[0]);
    let gm = (5*newImg.getPixel(x, y)[1]);
    let bm = (5*newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(x+1, y)[0];
    gm += newImg.getPixel(x+1, y)[1];
    bm += newImg.getPixel(x+1, y)[2];
    for (let i=-5+x; i<0+x && -5+x>=0; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===newImg.width-3) {
    let rm = (4*newImg.getPixel(x, y)[0]);
    let gm = (4*newImg.getPixel(x, y)[1]);
    let bm = (4*newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(x+1, y)[0] + newImg.getPixel(x+2, y)[0];
    gm += newImg.getPixel(x+1, y)[1] + newImg.getPixel(x+2, y)[1];
    bm += newImg.getPixel(x+1, y)[2] + newImg.getPixel(x+2, y)[2];
    for (let i=-5+x; i<0+x && -5+x>=0; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===newImg.width-4) {
    let rm = (3*newImg.getPixel(x, y)[0]);
    let gm = (3*newImg.getPixel(x, y)[1]);
    let bm = (3*newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(x+1, y)[0] + newImg.getPixel(x+2, y)[0] + newImg.getPixel(x+3, y)[0];
    gm += newImg.getPixel(x+1, y)[1] + newImg.getPixel(x+2, y)[1] + newImg.getPixel(x+3, y)[1];
    bm += newImg.getPixel(x+1, y)[2] + newImg.getPixel(x+2, y)[2] + newImg.getPixel(x+3, y)[2];
    for (let i=-5+x; i<0+x && -5+x>=0; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else if (x===newImg.width-5) {
    let rm = (2*newImg.getPixel(x, y)[0]);
    let gm = (2*newImg.getPixel(x, y)[1]);
    let bm = (2*newImg.getPixel(x, y)[2]);
    rm += newImg.getPixel(x+1, y)[0] + newImg.getPixel(x+2, y)[0] + newImg.getPixel(x+3, y)[0] + newImg.getPixel(x+4, y)[0];
    gm += newImg.getPixel(x+1, y)[1] + newImg.getPixel(x+2, y)[1] + newImg.getPixel(x+3, y)[1] + newImg.getPixel(x+4, y)[1];
    bm += newImg.getPixel(x+1, y)[2] + newImg.getPixel(x+2, y)[2] + newImg.getPixel(x+3, y)[2] + newImg.getPixel(x+4, y)[2];
    for (let i=-5+x; i<0+x && -5+x>=0; ++i) {
      rm += newImg.getPixel(i, y)[0];
      gm += newImg.getPixel(i, y)[1];
      bm += newImg.getPixel(i, y)[2];
    }
    return [rm/11, gm/11, bm/11];
  }
  else {
    let lrs = 0; let lgs = 0; let lbs = 0; let rrs = 0; let rgs = 0; let rbs = 0;
    for (let k = 0; k < 5 && (x-k)>=0 && (x+k)<newImg.width; ++k) {
      lrs += newImg.getPixel(x - k, y)[0];
      lgs += newImg.getPixel(x - k, y)[1];
      lbs += newImg.getPixel(x - k, y)[2];
      rrs += newImg.getPixel(x + k, y)[0];
      rgs += newImg.getPixel(x + k, y)[1];
      rbs += newImg.getPixel(x + k, y)[2];
    }
    let rm = (lrs+rrs+newImg.getPixel(x, y)[0]);
    let gm = (lgs+rgs+newImg.getPixel(x, y)[1]);
    let bm = (lbs+rbs+newImg.getPixel(x, y)[2]);
    return [rm/11, gm/11, bm/11];
  }

}

function blurImage(img) {
  return imageMap(img, blurPixel);
}

function isDark(img, x, y) {
  let pixelValue=img.getPixel(x, y);
  let factor = 0.5;
  if (pixelValue[0]<factor && pixelValue[1]<factor && pixelValue[2]<factor) {
    return true;
  }
  else{
    return false;
  }
}

function darken(img) {
  return imageMask(img, isDark, [0, 0, 0]);
}

function isLight(img, x, y) {
  let pixelValue=img.getPixel(x, y);
  if (pixelValue[0]>0.5 && pixelValue[1]>0.5 && pixelValue[2]>0.5) {
    return true;
  }
  else{
    return false;
  }
}

function lighten(img) {
  return imageMask(img, isLight, [1, 1, 1]);
}

function lightenAndDarken(img) {
  return darken(lighten(img));
}

let car=lib220.loadImageFromURL('https://cdn-3.motorsport.com/images/mgl/6zlrAvj2/s8/f1-austrian-gp-2018-kimi-raikkonen-ferrari-sf71h.jpg');
 car.show();
 lighten(car).show();
 darken(car).show();