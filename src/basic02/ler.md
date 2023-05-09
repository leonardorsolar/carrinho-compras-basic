# Associação simples ou depedência:

class A {
método(b: B) {
}
};

class B {
b: B;

    c(b: B) {

this.b = b;
}
}

# Agregação

class A {
b: B[ ];

    add(b: B) {

this.b.push(b);
}
}

class B {
b: B;

    c(b: B) {

this.b = b;
}
}

# composição

class A {
b = new B();
}

class B {
b: B;

    c(b: B) {

this.b = b;
}
}

<!-- O código apresenta diferentes tipos de relacionamentos entre as classes, sendo eles:

Associação simples: é o caso da classe A que recebe uma instância de B no método método(b: B). Essa associação representa um relacionamento de uso entre as classes, onde a classe A utiliza um objeto da classe B, mas não há uma dependência forte ou obrigatória entre elas.

Agregação: é o caso da classe B que possui um atributo b que é do tipo B. Essa associação representa um relacionamento em que uma classe (B) possui um objeto de outra classe (B) como um de seus atributos. Nesse caso, a classe B pode existir sem a classe B (por exemplo, b pode ser null), e a classe B pode ser compartilhada entre diferentes instâncias de B.

Composição: é o caso da classe A que cria uma instância de B no momento da sua criação com b = new B(). Nesse relacionamento, a classe A possui um objeto da classe B como um de seus atributos e é responsável pela sua criação e gerenciamento. Isso significa que a classe B não pode existir sem a classe A e é exclusiva dela. Se a classe A for destruída, a classe B também será destruída.

Cabe lembrar que a agregação e a composição são tipos de associação que representam diferentes graus de dependência entre as classes. Enquanto na agregação as classes são independentes entre si e podem existir sem a outra, na composição há uma forte dependência entre elas, sendo que a classe composta (no caso, B) não pode existir sem a classe que a compõe (no caso, A). -->
