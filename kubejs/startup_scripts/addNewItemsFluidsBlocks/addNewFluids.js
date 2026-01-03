StartupEvents.registry('fluid', event => {

    event.create('lvcef').thinTexture(0xFFFFF0).bucketColor(0xFFFFF0).displayName('LV Circuit Essence Fluid')
    event.create('lvcas').thickTexture(0xF0FFF0).bucketColor(0xF0FFF0).displayName('LV Circuit Slurry')
    event.create('mvcas').thickTexture(0xF0F0F0).bucketColor(0xF0F0F0).displayName('MV Circuit Slurry')
    event.create('hvcas').thickTexture(0xFFF0F0).bucketColor(0xF0F0F0).displayName('HV Circuit Slurry')

    event.create('myessence').thinTexture(0xFF0000).bucketColor(0xFF0000).displayName('Mystical Essence Fluid').noBlock()
    event.create('alchessence').thinTexture(0x00FFFF).bucketColor(0x00FFFF).displayName('Alchemical Essence Fluid').noBlock()
    event.create('deepdrill').thickTexture(0xF0F0F0).bucketColor(0xF0F0F0).displayName('Deepslate Drilling Fluid').noBlock()
    event.create('holywater').thinTexture(0xADD8E6).bucketColor(0xADD8E6).displayName('Holy Water').noBlock()

    event.create('acidinfusedlava').thickTexture(0xAAFF00).bucketColor(0xAAFF00).displayName('Acid-Infused Lava')
    event.create('moltenorichalcum').thinTexture(0xCC5500).bucketColor(0xCC5500).displayName('Molten Orichalcum').noBlock()
})