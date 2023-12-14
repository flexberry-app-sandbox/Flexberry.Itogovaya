package Itogovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itogovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧЗаказ
 */
@Entity(name = "IISItogovayaТЧЗаказ")
@Table(schema = "public", name = "ТЧЗаказ")
public class TCHZakaz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "СуммаНДС")
    private Integer суммандс;

    @Column(name = "Сумма")
    private Integer сумма;

    @Column(name = "ЭтоУслуга")
    private Boolean этоуслуга;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nomenklatura")
    @Convert("Nomenklatura")
    @Column(name = "Номенклатура", length = 16, unique = true, nullable = false)
    private UUID _nomenklaturaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nomenklatura", insertable = false, updatable = false)
    private Nomenklatura nomenklatura;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OtchetOZak")
    @Convert("OtchetOZak")
    @Column(name = "ОтчетОЗак", length = 16, unique = true, nullable = false)
    private UUID _otchetozakid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OtchetOZak", insertable = false, updatable = false)
    private OtchetOZak otchetozak;


    public TCHZakaz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Integer getСуммаНДС() {
      return суммандс;
    }

    public void setСуммаНДС(Integer суммандс) {
      this.суммандс = суммандс;
    }

    public Integer getСумма() {
      return сумма;
    }

    public void setСумма(Integer сумма) {
      this.сумма = сумма;
    }

    public Boolean getЭтоУслуга() {
      return этоуслуга;
    }

    public void setЭтоУслуга(Boolean этоуслуга) {
      this.этоуслуга = этоуслуга;
    }


}