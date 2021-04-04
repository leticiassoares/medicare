import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  @Input()
  acoes: Array<string>;

  @Input()
  planosInternos: Array<string>;

  @Input()
  responsaveis: Array<string>;

  @Input()
  apogs: Array<string>;

  anos: Array<string>;
  captacao: Array<string>;
  situacoes: Array<string>;
  idfs: Array<string>;

  form: FormGroup;

  onChanged = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      acao: [null],
      responsavel: [null],
      planoInterno: [null],
      apog: [null],
      exercicio: [null],
      data: this.fb.group({
        inicio: [null],
        fim: [null],
      }),
      captacao: [null],
      situacao: [null],
      idf: [null]
    });
  }

  onClick() {
    console.log(this.form.value);
    this.onChanged.emit(this.form.value);
  }

  onClear() {
    this.form.reset();
  }

}
