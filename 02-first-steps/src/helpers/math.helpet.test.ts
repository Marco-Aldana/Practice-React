import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helper'

describe('add', () => {
    test('should add two positive numbers', () => {
        // ! Arragne
        const a = 2;
        const b = 3;

        // ! Act
        const result = add(a, b)

        // ! Assert
        expect(result).toBe(5)
    })

    test('should add two negative numbers', () => {
        // ! Arragne
        const a = -2;
        const b = -3;

        // ! Act
        const result = add(a, b)

        // ! Assert
        expect(result).toBe(-5)
    })
})


describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        // ! Arragne
        const a = 2;
        const b = 3;

        // ! Act
        const result = subtract(a, b)

        // ! Assert
        expect(result).toBe(-1)
    })

    test('should subtract two negative numbers', () => {
        // ! Arragne
        const a = -2;
        const b = -3;

        // ! Act
        const result = subtract(a, b)

        // ! Assert
        expect(result).toBe(1)
    })
})


describe('multiply', () => {
    test('should multiply two positive numbers', () => {
        // ! Arragne
        const a = 2;
        const b = 3;

        // ! Act
        const result = multiply(a, b)

        // ! Assert
        expect(result).toBe(6)
    })

    test('should multiply two negative numbers', () => {
        // ! Arragne
        const a = -2;
        const b = -3;

        // ! Act
        const result = multiply(a, b)

        // ! Assert
        expect(result).toBe(6)
    })
})
