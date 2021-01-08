const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  console.log(timeNodes);
  
  const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(data=>{
      console.log(data);
      return data
    })
    .map(timeCode => {
      const podatak = timeCode.split(':').map(parseFloat)
      console.log('podatak=',podatak);
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => {
      return total + vidSeconds
    },0);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;
    console.log(secondsLeft);
    

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, secondsLeft);