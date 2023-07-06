const { expect } = require('chai');
const { stub } = require('sinon');

const { book } = require('../../models');
const bookService = require('../../services/books.service');

const testBook = {
  id: 1,
  title: 'Lord of the Rings',
  author: 'J. R. R. Tolkien',
  pageQuantity: 1178,
  createdAt: '2001-09-28 01:00:00',
  updatedAt: '2001-09-28 01:00:00',
};

describe('bookService', () => {
  describe('#getAll', () => {
    const findAllStub = stub(book, 'findAll');
    let books;

    describe('quando não existe nenhum livro cadastrado', () => {
      it('called book.findAll', async () => {
        findAllStub.resolves([]);
        books = await bookService.getAll();

        expect(book.findAll.calledOnce).to.be.equals(true);
        expect(books).to.be.an('array');
        expect(books).to.be.empty;

        findAllStub.reset();
      });
    });

    describe('quando existem livros cadastrados', () => {
      it('called book.findAll', async () => {
        findAllStub.resolves([testBook]);
        books = await bookService.getAll();

        expect(book.findAll.calledOnce).to.be.equals(true);
        expect(books).to.be.an('array');
        expect(books).to.be.deep.equal([testBook]);

        findAllStub.restore();
      });
    });
  });

  describe('#getById', () => {
    const findByPkStub = stub(book, 'findByPk');
    let currBook;

    describe('quando existe o livro', () => {

      it('called book.findByPk', async () => {
        findByPkStub.resolves(testBook);
        currBook = await bookService.getById(1);

        expect(book.findByPk.calledOnce).to.be.equals(true);
        expect(currBook).to.deep.equal(testBook);

        findByPkStub.reset();
        currBook = null;
      });
    });

    describe('quando não existe o livro', () => {
      it('called book.findByPk', async () => {
        findByPkStub.resolves(null);
        currBook = await bookService.getById(1000);

        expect(book.findByPk.calledOnce).to.be.equals(true);
        expect(currBook).to.be.null;

        findByPkStub.reset();
        currBook = null;
      });

    });
  });

  describe('#create', () => {
    describe('retorna o registro do livro criado', () => {
      const createStub = stub(book, 'create');
      const testBook = {
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        pageQuantity: 689,
      };
      let currBook;
      it('called book.create', async () => {
        createStub.resolves({
          id: 2,
          ...testBook,
          updatedAt: '2022-01-28T15:45:28.398Z',
          createdAt: '2022-01-28T15:45:28.398Z',
        });

        currBook = await bookService.createBook(testBook);

        expect(book.create.calledOnce).to.be.equals(true);
        expect(currBook).to.include(testBook); // como o objeto retornado tem menos atributos do que os esperados usamos o matcher include
        createStub.reset();
      });
    });
  });

  describe('#update', () => {
    const updateStub = stub(book, 'update');

    const testBook = {
      title: 'The Va Cinci Dode',
      author: 'Ban Drown',
      pageQuantity: 589,
    };

    let updated;

    describe('quando existe o livro', () => {
      it('called book.update', async () => {
        updateStub.resolves([true]);
        updated = await bookService.updateBook(2, testBook);
        expect(book.update.calledOnce).to.be.equals(true);
        expect(updated).to.be.true;
        updateStub.reset();
      });
    });

    describe('quando não existe o livro', () => {
      it('called book.update', async () => {
        updateStub.resolves([false]);
        updated = await bookService.updateBook(1000, testBook);

        expect(book.update.calledOnce).to.be.equals(true);
        expect(updated).to.be.false;

        updateStub.reset();
      });
    });
  });

  describe('#remove', () => {
    const removeStub = stub(book, 'destroy');
    let removed;

    describe('quando existe o livro', () => {
      it('called book.destroy', async () => {
        removeStub.resolves(true);
        removed = await bookService.removeBook(2);

        expect(book.destroy.calledOnce).to.be.equals(true);
        expect(removed).to.be.eq(true);

        removeStub.reset();
      });

    });

    describe('quando não existe o livro', () => {
      it('called book.update', async () => {
        removeStub.resolves(false);
        updated = await bookService.removeBook(1000);

        expect(book.destroy.calledOnce).to.be.equals(true);
        expect(updated).to.be.eq(false);

        removeStub.reset();
      });

    });
  });
});