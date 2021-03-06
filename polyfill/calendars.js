// © 2020 Google, Ecma International

// Polyfill Intl.getSupportedCalendars
if (Intl.getSupportedCalendars == undefined) {
  Intl.getSupportedCalendars = function() {
    const CALENDARS_IN_CLDR = [ 
      // DATA from CLDR
      // Generated by  
      // file="https://raw.githubusercontent.com/unicode-org/cldr/master/common/bcp47/calendar.xml"
      // curl $file 2> /dev/null | egrep "            <type name=" |cut -d '"' -f2 | \ 
      // sed -e 's/^/"/g' | sed -e 's/$/",/g' |tr "\n" " " 
      "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "gregory",
      "hebrew", "indian", "islamic", "islamic-umalqura", "islamic-tbla",
      "islamic-civil", "islamic-rgsa", "iso8601", "japanese", "persian", "roc", "islamicc"
    ];  
    const isSupported = function(item) {
      try {
        let df = new Intl.DateTimeFormat("en-u-ca-" + item);
        let o = df.resolvedOptions().calendar;
        if (item == "gregory" || o != "gregory") return true;
        // console.log(item + " is accepted but changed to " + o); 
      } catch (e) {
        // console.log(item + " is NOT accepted");
      }   
      return false;
    };  
    var r = []; 
    CALENDARS_IN_CLDR.forEach(function(item) { if (isSupported(item)) r.push(item); }); 
    return r;
  };  
}
