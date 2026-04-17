ServerEvents.recipes(events => {

    events.replaceInput(
        'gtceu:shaped/uhv_scanner',
        '#gtceu:circuits/uev',
        'kubejs:animated/draconicprocessor'
    )

    events.replaceInput(
        'gtceu:shaped/uhv_circuit_assembler',
        '#gtceu:circuits/uev',
        'kubejs:animated/draconicprocessor'
    )

    events.remove({id: 'gtceu:shaped/uhv_circuit_assembler'})
    events.remove({id: 'gtceu:shaped/uhv_scanner'})

})