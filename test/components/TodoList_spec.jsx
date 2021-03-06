import React from 'react'
import TestUtils from 'react-addons-test-utils'

import { expect } from 'chai'
import { List, Map } from 'immutable'

import TodoList from '../../src/components/TodoList'

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = TestUtils

describe('TodoList', () => {
	it('renders a list with only the active if the filter is active', () => {
		const todos = List.of(
			Map({id: 1, text: 'React', status: 'active'}),
			Map({id: 2, text: 'Redux', status: 'active'}),
			Map({id: 3, text: 'Immutable', status: 'completed'})
		)

		const filter = 'active'

		const component = renderIntoDocument(
			<TodoList filter={filter} todos={todos} />
		)

		const items = scryRenderedDOMComponentsWithTag(component, 'li')

		expect(items.length).to.equal(2)
		expect(items[0].textContent).to.equal('React')
		expect(items[1].textContent).to.equal('Redux')
	})

	it('renders a list with the completed items', () => {
		const todos = List.of(
			Map({id: 1, text: 'React', status: 'active'}),
			Map({id: 2, text: 'Redux', status: 'active'}),
			Map({id: 3, text: 'Immutable', status: 'completed'})
		)

		const filter = 'completed'

		const component = renderIntoDocument(
			<TodoList filter={filter} todos={todos} />
		)

		const items = scryRenderedDOMComponentsWithTag(component, 'li')

		expect(items.length).to.equal(1)
		expect(items[0].textContent).to.equal('Immutable')
	})

	it('renders a list with all the items', () => {
		const todos = List.of(
			Map({id: 1, text: 'React', status: 'active'}),
			Map({id: 2, text: 'Redux', status: 'active'}),
			Map({id: 3, text: 'Immutable', status: 'completed'}),
		)

		const filter = 'all'

		const component = renderIntoDocument(
			<TodoList filter={filter} todos={todos} />
		)

		const items = scryRenderedDOMComponentsWithTag(component, 'li')

		expect(items.length).to.equal(3)
		expect(items[0].textContent).to.equal('React')
		expect(items[1].textContent).to.equal('Redux')
		expect(items[2].textContent).to.equal('Immutable')
	})

})