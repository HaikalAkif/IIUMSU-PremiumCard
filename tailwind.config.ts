import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    theme: {
        fontFamily: {
            sans: [
                'Inter',
                'sans-serif'
            ]
        },
        extend: {
            animation: {
                'card-float': 'float 3s ease-in-out infinite'
            },
            keyframes: {
                float: {
                    '0%, 100%': {
                        boxShadow: '0 5px 15px 0px rgba(0,0,0,0.6)',
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        boxShadow: '0 25px 15px 0px rgba(0,0,0,0.2)',
                        transform: 'translateY(-20px)'
                    }
                }
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'gold': '#cda936',
                'black': '#101014',
                'white': '#e6e6eb'
            }
        }
    },
};
