Name_Array = []

function Submit()
{
    var display_student_array = []

    for(var j= 1; j <= 4; j++)
    {
        var student_name = document.getElementById("student_"+ j).value ;
        Name_Array.push(student_name);
    }

    var length = Name_Array.length ; 

    for(var k = 0; k < length; k++)
    {
        display_student_array.push(Name_Array[k]) ;
    }

    document.getElementById("Name_of_Students_with_commas").innerHTML = display_student_array ; 

    var remove_commas = display_student_array.join(" ") ;
    document.getElementById("Name_of_Students_without_commas").innerHTML = remove_commas ;

    document.getElementById("submit").style.display = "none" ;
    document.getElementById("sort").style.display = "inline-block" ;
}

function Sort()
{
    var sorted = Name_Array.sort()

    var display_student_array1 = []

    var length = Name_Array.length ; 

    for(var k = 0; k < length; k++)
    {
        display_student_array1.push(Name_Array[k]) ;
    }

    document.getElementById("Name_of_Students_with_commas").innerHTML = display_student_array1 ; 

    var remove_commas = display_student_array1.join(" ") ;
    document.getElementById("Name_of_Students_without_commas").innerHTML = remove_commas ;




}