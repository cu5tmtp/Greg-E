ServerEvents.recipes(event => {

    event.shaped(
        Item.of('kubejs:naquadahfilter', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:naquadah_foil',
            B: 'gtceu:naquadah_plate'
        }
    )

    event.shaped(
        Item.of('kubejs:nebulonfilter', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:nebulon_alpha_foil',
            B: 'gtceu:nebulon_alpha_plate'
        }
    )

})