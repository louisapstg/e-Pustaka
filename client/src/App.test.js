import React from "react"
import {
   ApolloProvider
} from "@apollo/client"
import {
   Provider
} from "react-redux"
import {
   render,
   screen,
   fireEvent
} from "@testing-library/react"
import client from './apollo-client';
import { store, persistor } from './store/store'
import { MemoryRouter } from "react-router-dom"
import {
   Home,
   AddBook
} from './pages'
import { PersistGate } from 'redux-persist/integration/react';


describe("HomePage", () => {
   test('Check Title Home Page', () => {
      render(
         <ApolloProvider client={client}>
            <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                  <MemoryRouter initialEntries={["/"]}>
                     <Home />
                  </MemoryRouter>
               </PersistGate>
            </Provider>
         </ApolloProvider>
      )
      expect(screen.getByText('Perpustakaan')).toBeInTheDocument()
      expect(screen.getByText("ePustaka")).toBeInTheDocument()
   })
})

describe('AddBookPage', () => {
   test('check input for book add', () => {
      render(
         <ApolloProvider client={client}>
            <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                  <MemoryRouter initialEntries={["/add-book"]}>
                     <AddBook />
                  </MemoryRouter>
               </PersistGate>
            </Provider>
         </ApolloProvider>
      )
      fireEvent.input(screen.getByRole("textbox", { name: /title/i }), {
         target: { value: "Generic" },
      });
      fireEvent.input(screen.getByLabelText(/Penulis/), {
         target: { value: "Richard" },
      });
      fireEvent.input(screen.getByLabelText(/Sinopsis/), {
         target: { value: "Perferendis rerum officia nihil error harum." },
      });
      expect(screen.getByLabelText(/Judul/)).toHaveValue("Generic");
      expect(screen.getByLabelText(/Penulis/)).toHaveValue("Richard");
      expect(screen.getByLabelText(/Sinopsis/)).toHaveValue("Perferendis rerum officia nihil error harum.");
   })

})