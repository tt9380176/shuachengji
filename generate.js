$(document).ready(function(){
    $("#generate").click(generate)
    let current = new Date();
    $('#year').val(current.getFullYear())
    $('#month').val(current.getMonth() + 1)
    $('#day').val(current.getDate())
    $('#hour').val(current.getHours())
    $('#minute').val(current.getMinutes())
})
function generate(){
        
    var year, month, day, hour, minute, startTime, maxDelay, minScore, maxScore, minDuration, maxDuration, count;
    try{

      year = Math.round($('#year').val());
      month = Math.round($('#month').val());
      day = Math.round($('#day').val());
      hour = Math.round($('#hour').val());
      minute = Math.round($('#minute').val());
  
      startTime = new Date(year, month -1 , day, hour, minute); 
      maxDelay = Math.round($('#maxDelay').val());
      minScore = Math.round($('#minScore').val());
      maxScore = Math.round($('#maxScore').val());
      minDuration = Math.round($('#minDuration').val());
      maxDuration = Math.round($('#maxDuration').val());
      count = Math.round($('#count').val());

    } catch(e){
      alert('请检查输入内容格式！')
    }

    function getRandomTime(minD, maxD) {
        // 生成一个时长随机数
        return Math.random() * (maxD - minD) * 1000 * 60;
    }

    function parseString(date){
      return date.toLocaleString('zh-CN');
    //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    // 生成数据
    var randomStartTimes = [];
    var randomEndTimes = [];
    var randomScores = [];
    for (var i = 0; i < count; i++) {
      let startTimeMill = startTime.getTime() + getRandomTime(0, maxDelay);
      let endTimeMill = startTimeMill + minDuration * 1000 * 60 + getRandomTime(minDuration, maxDuration);
      randomStartTimes.push(parseString(new Date(startTimeMill)));
      randomEndTimes.push(parseString(new Date(endTimeMill)));
      randomScores.push(minScore + Math.round(Math.random() * (maxScore - minScore)));
    }

    $('#startTimes').val(randomStartTimes.join('\n'))
    $('#endTimes').val(randomEndTimes.join('\n'))
    $('#scores').val(randomScores.join('\n'))
  }