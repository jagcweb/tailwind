module.exports = {
    theme:{
        extend:{
            screens:{
                'xs':{'max': '640px'},
                'md': {'max': '767px'},
                'md2': {'max': '1024px'},
            },
            backgroundImage: theme =>({
                "body-pattern" : "url('../img/pattern.png')",
                "banner" : "url('../img/bakbaner.png')",
                "px-gray" : "url('../img/pxgray.png')"
            }),
            backgroundPosition:theme=>({
                'banner-position': "-30px -140px;"
            }),
            colors:{
                "cyan":"#37bcf9",
                "azul-oscuro":"#0370b9"
            },

            animation: {
                'spin-slow': 'spin 2s linear infinite',
                'from-below': 'fromBelow 0.5s linear',
                'from-right': 'fromRight 0.5s linear',
                'bg-banner': 'bgBanner 3s linear',
                'show-card-icon': 'showCardIcon 0.3s linear',
                'show-card-desc': 'showCardDesc 0.4s linear',
            },
            keyframes:{
                fromBelow:{
                    '0%': {transform: 'translateY(0%)'},
                    '50%': {transform: 'translateY(200%)'},
                    '100%': {transform: 'translateY(0%)'}
                },

                fromRight:{
                    '0%': {transform: 'translateX(200%)'},
                    '100%': {transform: 'translateX(0%)'}
                },

                bgBanner:{
                    '0%': {'background-position': '0px, 0px'},
                    '100%': {'background-position': '-30px -140px'},
                },

                showCardIcon:{
                    '0%': {transform: 'translateY(-200%)'},
                    '100%': {transform: 'translateY(0%)'},
                },

                showCardDesc:{
                    '0%': {transform: 'translateX(-300%)'},
                    '100%': {transform: 'translateX(0%)'},
                },
            }
        }
    },

    variants: {
        animation: ['responsive', 'hover', 'group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
        fontSize: ['responsive', 'hover', 'group-hover'],
        transform: ['responsive', 'hover', 'group-hover'],
        scale: ['responsive', 'hover', 'group-hover'],
    }
}