ServerEvents.recipes((event) => {

    event.replaceInput(
        {id: 'gtexolegs:shaped/lv_exoskeleton_legs'},
        'gtceu:double_tin_alloy_plate',
        'botania:travel_belt'
    )

    event.replaceInput(
        {id: 'gtexolegs:shaped/mv_exoskeleton_legs'},
        'gtceu:double_tin_alloy_plate',
        'gtexolegs:lv_exoskeleton_legs'
    )

    event.replaceInput(
        {id: 'gtexolegs:shaped/hv_exoskeleton_legs'},
        'gtceu:double_tin_alloy_plate',
        'gtexolegs:mv_exoskeleton_legs'
    )

    event.replaceInput(
        {id: 'gtexolegs:shaped/ev_exoskeleton_legs'},
        'gtceu:double_tin_alloy_plate',
        'gtexolegs:hv_exoskeleton_legs'
    )

    event.replaceInput(
        {id: 'gtexolegs:shaped/iv_exoskeleton_legs'},
        'gtceu:double_tin_alloy_plate',
        'gtexolegs:ev_exoskeleton_legs'
    )

})