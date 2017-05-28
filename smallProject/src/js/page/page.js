/**
 * Created by hp on 2017/5/27.
 */
$(function(){
    var main_length=$('.main .list').length;
    $('.take').children('span').html(main_length);
    $(document).on('click','.list-left-btn1',function(){
        if($(this).attr('data-type')=='true'){
            $(this).css({'transform':'rotate(90deg)','margin-top':'-6px'});
            $(this).siblings("button:last").css('display','block');
            $(this).attr('data-type','false');
        }else{
            $(this).css({'transform':'rotate(0deg)','margin-top':'-6px'});
            $(this).siblings("button:last").css('display','none');
            $(this).attr('data-type','true');
        }
    });
    $(document).on('click','.list-del',function(){
        $(this).parent().remove();
        var main_length=$('.main .list').length;
        $('.take').children('span').html(main_length);
    });
});
