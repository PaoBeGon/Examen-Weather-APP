        $(document).ready(function() {
            $("#pedir").click(function(){
            $.simpleWeather({
                woeid: '329747',
                unit: 'c',
                success: function(weather) {
                    var sBasicTemp = weather.temp+'&deg;'+weather.units.temp;
                    var sBasicIcon = weather.thumbnail;
                    var weatherForecastAll = '<ul class="weatherList">';
                    var listClass = '';
                    
                    for(var i=0;i<weather.forecast.length;i++) {
                        if(i == (weather.forecast.length-1)){listClass = ' class="last"';}
                        if(i == 0) {
                            weatherForecastDay = 'Heute';
                        } else {
                            var forcastDay = weather.forecast[i].day;
                            switch(forcastDay){
                                case('Mon'):
                                    weatherForecastDay = 'Montag';
                                    break;
                                case('Tue'):
                                    weatherForecastDay = 'Dienstag';
                                    break;
                                case('Wed'):
                                    weatherForecastDay = 'Mittwoch';
                                    break;
                                case('Thu'):
                                    weatherForecastDay = 'Donnerstag';
                                    break;
                                case('Fri'):
                                    weatherForecastDay = 'Freitag';
                                    break;
                                case('Sat'):
                                    weatherForecastDay = 'Samstag';
                                    break;
                                case('Sun'):
                                    weatherForecastDay = 'Sonntag';
                                    break;
                            }
                        }
                        weatherForecastAll += '<li'+listClass+'><div class="clear weatherListCont">'+weatherForecastDay+'</div><div class="weatherListCont"><img src="'+weather.forecast[i].thumbnail+'" alt="" /></div><div class="weatherListCont">'+weather.forecast[i].low+'&deg;'+weather.units.temp+' - '+weather.forecast[i].high+'&deg;'+weather.units.temp+'</div></li>';
                    }
                    weatherForecastAll += '</ul>';

                        $(".weatherBasicIcon").html('<img src="'+sBasicIcon+'" alt="" />');
                        $(".weatherBasicTemp").html(sBasicTemp);
                        $(".weatherBasicTempHead").html('<img width="45px" height="auto" src="'+sBasicIcon+'" alt="" /> '+sBasicTemp);
                        $(".weatherForecastAll").html(weatherForecastAll);
                },
                error: function(error) {
                    $(".weatherBasicTempHead").html('---');
                }
            });
        });
        });